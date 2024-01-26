require("dotenv").config();
const { MongoClient } = require("mongodb");
const express = require("express");
const app = express();
const exceljs = require("exceljs");
const fs = require("fs");
const axios = require("axios");

app.use("/public", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB();

const stydentData = client.db("AcademicsDB").collection("users");

// Route to process Excel files from a folder
app.post("/process-excel-folder", async (req, res) => {
  try {
    const folderPath = "Downloads";

    const files = fs.readdirSync(folderPath);

    for (const file of files) {
      if (file.endsWith(".xlsx")) {
        const filePath = `${folderPath}/${file}`;
        const workbook = new exceljs.Workbook();
        await workbook.xlsx.readFile(filePath);

        const worksheet = workbook.getWorksheet(1);

        const startRow = 2;

        const bulkOps = [];

        for (let rowNumber = startRow; rowNumber <= startRow + 99; rowNumber++) {
          const row = worksheet.getRow(rowNumber);

          const excelData = {
            srno: row.getCell("A").value,
            vecno: row.getCell("B").value,
            name: row.getCell("C").value,
            eventcategory: row.getCell("D").value,
            eventname: row.getCell("E").value,
            date: row.getCell("F").value,
            hoursalloted: row.getCell("G").value,
          };

          console.log(`Processing row ${rowNumber}: ${JSON.stringify(excelData)}`);

          const existingVolunteerQuery = {
            srno: excelData.srno,
            name: excelData.name,
          };

          const existingVolunteer = await stydentData.findOne(existingVolunteerQuery);

          const updatedEvent = {
            eventcategory: excelData.eventcategory,
            eventname: excelData.eventname,
            date: excelData.date,
            hoursalloted: excelData.hoursalloted,
          };

          if (existingVolunteer) {
            const eventIndex = existingVolunteer.eventsattained.findIndex((event) => event.eventname === excelData.eventname);

            if (eventIndex !== -1) {
              const isEventUpdated = !isEqual(existingVolunteer.eventsattained[eventIndex], updatedEvent);

              if (isEventUpdated) {
                existingVolunteer.eventsattained[eventIndex] = updatedEvent;

                bulkOps.push({
                  updateOne: {
                    filter: existingVolunteerQuery,
                    update: {
                      $set: {
                        eventsattained: existingVolunteer.eventsattained,
                      },
                    },
                  },
                });

                console.log(`Event updated: ${JSON.stringify(updatedEvent)}`);
              } else {
                console.log(`No changes for event ${excelData.eventname} of ${excelData.name}`);
              }
            } else {
              existingVolunteer.eventsattained.push(updatedEvent);

              bulkOps.push({
                updateOne: {
                  filter: existingVolunteerQuery,
                  update: {
                    $set: {
                      eventsattained: existingVolunteer.eventsattained,
                    },
                  },
                },
              });

              console.log(`New event added: ${JSON.stringify(updatedEvent)}`);
            }
          } else {
            const newVolunteer = {
              srno: excelData.srno,
              vecno: excelData.vecno,
              name: excelData.name,
              eventsattained: [updatedEvent],
            };

            bulkOps.push({
              insertOne: { document: newVolunteer },
            });

            console.log(`New volunteer added: ${JSON.stringify(newVolunteer)}`);
          }
        }

        if (bulkOps.length > 0) {
          await stydentData.bulkWrite(bulkOps);
        }
      }
    }

    res.status(200).send("Data from Excel files processed and stored in MongoDB successfully");
    console.log("Data from Excel files processed and stored in MongoDB successfully");
  } catch (error) {
    console.error("Error processing Excel files:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Route to trigger the process
app.get("/", async (req, res) => {
  try {
    const apiUrl = `http://localhost:${PORT}/process-excel-folder`;
    const response = await axios.post(apiUrl);

    res.status(200).send(response.data);
  } catch (error) {
    console.error("Error triggering the process:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Function to check if two objects are equal
function isEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(