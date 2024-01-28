const router = require("express").Router();
const { Achievement } = require("../models/achievement");
const { Internship } = require("../models/internship");
const { Publication } = require("../models/publication");
const { Result } = require("../models/results");
const { Certificate } = require("../models/certificate");

router.get("/", async (req, res) => {
  try {
    const achievement = await Achievement.find();
    const internship = await Internship.find();
    const publication = await Publication.find();
    const result = await Result.find();
    const certificate = await Certificate.find();
    res.send({ achievement, internship, publication, result, certificate });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add-achievement", async (req, res) => {
  try {
    const achievement = await new Achievement(req.body).save();
    res.send(achievement);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add-internship", async (req, res) => {
  try {
    const Intern = await new Internship(req.body).save();
    res.send(Intern);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add-publication", async (req, res) => {
  try {
    const publication = await new Publication(req.body).save();
    res.send(publication);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add-result", async (req, res) => {
  try {
    const user = await Result.findOne({ rollNumber: req.body.rollNumber });
    if (user) return res.status(409).send({ message: "User Already Exists" });
    const result = await new Result(req.body).save();
    res.send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.post("/add-certificate", async (req, res) => {
  try {
    const certificate = await new Certificate(req.body).save();
    res.send(certificate);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/delete-achievement/:id", async (req, res) => {
  try {
    const user = await Achievement.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement)
      return res.status(409).send({ message: "Achievement Not Found" });
    const achievementData = await Achievement.findByIdAndDelete(req.params.id);
    res.send(achievementData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/delete-internship/:id", async (req, res) => {
  try {
    const user = await Internship.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const Intern = await Internship.findById(req.params.id);
    if (!Intern)
      return res.status(409).send({ message: "Internship Not Found" });
    const InternshipData = await Internship.findByIdAndDelete(req.params.id);
    res.send(InternshipData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/delete-publication/:id", async (req, res) => {
  try {
    const user = await Publication.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const publication = await Publication.findById(req.params.id);
    if (!publication)
      return res.status(409).send({ message: "Publication Not Found" });
    const publicationData = await Publication.findByIdAndDelete(req.params.id);
    res.send(publicationData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/delete-result/:id", async (req, res) => {
  try {
    const user = await Result.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(409).send({ message: "Result Not Found" });
    const resultData = await Result.findByIdAndDelete(req.params.id);
    res.send(resultData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.delete("/delete-certificate/:id", async (req, res) => {
  try {
    const user = await Certificate.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate)
      return res.status(409).send({ message: "Certificate Not Found" });
    const certificateData = await Certificate.findByIdAndDelete(req.params.id);
    res.send(certificateData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/update-achievement/:id", async (req, res) => {
  try {
    const user = await Achievement.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const achievement = await Achievement.findById(req.params.id);
    if (!achievement)
      return res.status(409).send({ message: "Achievement Not Found" });
    const achievementData = await Achievement.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(achievementData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/update-internship/:id", async (req, res) => {
  try {
    const user = await Internship.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const Intern = await Internship.findById(req.params.id);
    if (!Intern)
      return res.status(409).send({ message: "Internship Not Found" });
    const InternshipData = await Internship.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(InternshipData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/update-publication/:id", async (req, res) => {
  try {
    const user = await Publication.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const publication = await Publication.findById(req.params.id);
    if (!publication)
      return res.status(409).send({ message: "Publication Not Found" });
    const publicationData = await Publication.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(publicationData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/update-result/:id", async (req, res) => {
  try {
    const user = await Result.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(409).send({ message: "Result Not Found" });
    const resultData = await Result.findByIdAndUpdate(req.params.id, req.body);
    res.send(resultData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

router.put("/update-certificate/:id", async (req, res) => {
  try {
    const user = await Certificate.findOne({ rollNumber: req.body.rollNumber });
    if (!user) return res.status(409).send({ message: "User Not Found" });
    const certificate = await Certificate.findById(req.params.id);
    if (!certificate)
      return res.status(409).send({ message: "Certificate Not Found" });
    const certificateData = await Certificate.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send(certificateData);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
