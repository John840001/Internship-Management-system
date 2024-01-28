import React, { useState, useEffect } from "react";
import TeacherNavbar from "../../components/navBar/teacherNavbar";
import axios from "axios";

const TeacherHome = () => {
  // const studentsData = [
  //     { name: "John Doe", rollNo: 1, certifications: 2, internships: 3, internshipMonths: 6, cgpa: 8.5 },
  //     { name: "Jane Doe", rollNo: 2, certifications: 3, internships: 4, internshipMonths: 12, cgpa: 9.0 },
  //     // Add more student data here
  // ];

  const [studentsData, setStudentInternships] = useState([]);
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        // const data = response.data.internship
        setStudentInternships(response.data.internship);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const filteredStudents = [...studentsData]; // Create a copy of the original array to avoid mutating it

  if (filter === "asc") {
    filteredStudents.sort((a, b) => a.internships - b.internships);
  } else if (filter === "desc") {
    filteredStudents.sort((a, b) => b.internships - a.internships);
  } else if (filter === "ascCgpa") {
    filteredStudents.sort((a, b) => a.cgpa - b.cgpa);
  } else if (filter === "descCgpa") {
    filteredStudents.sort((a, b) => b.cgpa - a.cgpa);
  }

  return (
    <div>
      <TeacherNavbar />

      <div className="mt-8">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="asc">Ascending Internships</option>
          <option value="desc">Descending Internships</option>
          <option value="ascCgpa">Ascending CGPA</option>
          <option value="descCgpa">Descending CGPA</option>
        </select>
      </div>

      <div className="mt-8">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Roll No</th>
              <th className="border px-4 py-2">No. of Certifications</th>
              <th className="border px-4 py-2">No. of Internships</th>
              <th className="border px-4 py-2">No. of Internship Months</th>
              <th className="border px-4 py-2">Current CGPA</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">{student.rollNumber}</td>
                <td className="border px-4 py-2">{student.certificate}</td>
                <td className="border px-4 py-2">{student.internship}</td>
                <td className="border px-4 py-2">{student.internshipMonths}</td>
                <td className="border px-4 py-2">{student.result.cgpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherHome;
