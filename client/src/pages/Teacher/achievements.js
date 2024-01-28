import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import TeacherNavbar from "../../components/navBar/teacherNavbar";
import axios from "axios";

const TeacherAchievement = () => {
    // const studentsData = [
    //     {
    //         name: "John Doe",
    //         rollNo: 1,
    //         achievements: [
    //             { name: "Achievement 1" },
    //             { name: "Achievement 2" },
    //         ],
    //         level: "National",
    //     },
    //     {
    //         name: "Jane Doe",
    //         rollNo: 2,
    //         achievements: [
    //             { name: "Achievement 3" },
    //             { name: "Achievement 4" },
    //         ],
    //         level: "Inter-National",
    //     },
    //     // Add more student data here
    // ];

    const [studentsData, setStudentsData] = useState([]);
    const [filter, setFilter] = useState("all");
    const [searchText, setSearchText] = useState(""); // State to store the search text for achievements and level

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/api/data");
            // const data = response.data.internship
            setStudentsData(response.data.achievement);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        getData();
      }, []); 
    
    let filteredStudents = [...studentsData]; // Create a copy of the original array to avoid mutating it

    // Filter students based on search text for achievements and level
    if (searchText) {
        filteredStudents = filteredStudents.filter((student) =>
            student.achievement.some(
                (achievement) =>
                    achievement.toLowerCase().includes(searchText.toLowerCase())
            ) ||
            student.level.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    return (
        <div className="min-h-screen">
            <TeacherNavbar />
            <div className="mt-8">
                <input
                    type="text"
                    placeholder="Search Achievement Name or Level"
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
                            <th className="border px-4 py-2">Achievements</th>
                            <th className="border px-4 py-2">Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2 text-center">{student.name}</td>
                                <td className="border px-4 py-2 text-center">{student.rollNumber}</td>
                                <td className="border px-4 py-2 text-center">
                                    <ul>
                                        {student.achievement.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex}>
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border px-4 py-2 text-center">{student.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherAchievement;
