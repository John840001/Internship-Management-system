import React, { useState } from "react";
import { Link } from "react-router-dom";
import TeacherNavbar from "../../components/navBar/teacherNavbar";

const TeacherAchievement = () => {
    const studentsData = [
        {
            name: "John Doe",
            rollNo: 1,
            achievements: [
                { name: "Achievement 1" },
                { name: "Achievement 2" },
            ],
            level: "National",
        },
        {
            name: "Jane Doe",
            rollNo: 2,
            achievements: [
                { name: "Achievement 3" },
                { name: "Achievement 4" },
            ],
            level: "Inter-National",
        },
        // Add more student data here
    ];

    const [filter, setFilter] = useState("all");
    const [searchText, setSearchText] = useState(""); // State to store the search text for achievements and level

    let filteredStudents = [...studentsData]; // Create a copy of the original array to avoid mutating it

    // Filter students based on search text for achievements and level
    if (searchText) {
        filteredStudents = filteredStudents.filter((student) =>
            student.achievements.some(
                (achievement) =>
                    achievement.name.toLowerCase().includes(searchText.toLowerCase())
            ) ||
            student.level.toLowerCase().includes(searchText.toLowerCase())
        );
    }

    return (
        <div>
            <TeacherNavbar />
            <h1 className="text-7xl font-bold underline">Teacher Home</h1>
            <Link to="/">Home</Link>

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
                                <td className="border px-4 py-2">{student.name}</td>
                                <td className="border px-4 py-2">{student.rollNo}</td>
                                <td className="border px-4 py-2">
                                    <ul>
                                        {student.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex}>
                                                {achievement.name}
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="border px-4 py-2">{student.level}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TeacherAchievement;
