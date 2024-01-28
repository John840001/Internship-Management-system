import React, { useEffect, useState } from "react";
import TeacherNavbar from "../../components/navBar/teacherNavbar";
import axios from "axios";

// Dummy data for student results
// const studentResults = [
//   {
//     id: 1,
//     rollNumber: "S001",
//     name: "John Doe",
//     marks: [85, 90, 78, 92, 88, 89, 76, 95],
//   },
//   {
//     id: 2,
//     rollNumber: "S002",
//     name: "Jane Smith",
//     marks: [92, 88, 76, 85, 90, 78, 89, 95],
//   },
//   {
//     id: 3,
//     rollNumber: "S003",
//     name: "Bob Johnson",
//     marks: [85, 90, 78, 92, 88, 89, 76, 95],
//   },
//   {
//     id: 4,
//     rollNumber: "S004",
//     name: "Alice Williams",
//     marks: [92, 88, 76, 85, 90, 78, 89, 95],
//   },
//   // Add more students here
// ];

const ResultsPage = () => {
  const [studentResults, setStudentResults] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");
        // const data = response.data.internship
        setStudentResults(response.data.result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <TeacherNavbar />
      <div className="min-h-screen">
        <h1 className="text-4xl font-bold my-5 text-center">Student Results</h1>
        <div className="mx-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roll Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student Name
                </th>
                {Array.from({ length: 8 }).map((_, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Semester {index + 1}
                  </th>
                ))}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CGPA
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {studentResults.map((student) => (
                <tr key={student.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.rollNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem1}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem2}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem3}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem4}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem5}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem6}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem7}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.sem8}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {student.cgpa}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
