import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherNavbar from "../../components/navBar/teacherNavbar";
import axios from "axios";

const TeacherPaper = () => {
  // const studentsData = [
  //     {
  //         name: "John Doe",
  //         rollNo: 1,
  //         papers: [
  //             { name: "Certification 1", length: "3 months" },
  //             { name: "Certification 2", length: "4 months" }
  //         ],
  //         internships: 3,
  //         internshipMonths: 6,
  //         cgpa: 8.5
  //     },
  //     {
  //         name: "Jane Doe",
  //         rollNo: 2,
  //         papers: [
  //             { name: "Certification 3", length: "5 months" },
  //             { name: "Certification 4", length: "6 months" }
  //         ],
  //         internships: 4,
  //         internshipMonths: 12,
  //         cgpa: 9.0
  //     },
  //     // Add more student data here
  // ];

  const [studentsData, setStudentsData] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchText, setSearchText] = useState(""); // State to store the search text

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        // const data = response.data.internship
        setStudentsData(response.data.publication);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  let filteredStudents = [...studentsData]; // Create a copy of the original array to avoid mutating it

  // Filter students based on search text
  if (searchText) {
    filteredStudents = filteredStudents.filter((student) =>
      student.paperLink.some((cert) =>
        cert.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  return (
    <div className=" min-h-screen">
      <TeacherNavbar />
      <div className="mt-8">
        <input
          type="text"
          placeholder="Search Paper Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Roll No</th>
              <th className="border px-4 py-2">Papers</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2 text-center">{student.name}</td>
                <td className="border px-4 py-2 text-center">
                  {student.rollNumber}
                </td>
                <td className="border px-4 py-2 text-center">
                  <ul>
                    {student.paperLink.map((cert, certIndex) => (
                      <li key={certIndex}>
                        {cert} ({cert.length})
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherPaper;
