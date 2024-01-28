import React, { useState } from "react";
import TeacherNavbar from "../../components/navBar/teacherNavbar";

// Dummy data for student internships
const studentInternships = [
  {
    id: 1,
    rollNumber: "S001",
    name: "John Doe",
    company: "ABC Inc.",
    time: "Summer 2023",
  },
  {
    id: 2,
    rollNumber: "S002",
    name: "Jane Smith",
    company: "XYZ Corp.",
    time: "Fall 2023",
  },
  {
    id: 3,
    rollNumber: "S003",
    name: "Bob Johnson",
    company: "ABC Inc.",
    time: "Winter 2024",
  },
  {
    id: 4,
    rollNumber: "S004",
    name: "Alice Williams",
    company: "XYZ Corp.",
    time: "Spring 2024",
  },
  {
    id: 5,
    rollNumber: "S005",
    name: "David Brown",
    company: "ABC Inc.",
    time: "Summer 2023",
  },
  {
    id: 6,
    rollNumber: "S006",
    name: "Emily Davis",
    company: "XYZ Corp.",
    time: "Fall 2023",
  },
  {
    id: 7,
    rollNumber: "S007",
    name: "Michael Johnson",
    company: "ABC Inc.",
    time: "Winter 2024",
  },
];

const TeacherInternship = () => {
  const [searchText, setSearchText] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("All");
  const [filteredInternships, setFilteredInternships] =
    useState(studentInternships);

  const handleSearch = (text) => {
    setSearchText(text);
    filterInternships(text, filterCriteria);
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
    filterInternships(searchText, criteria);
  };

  const filterInternships = (text, criteria) => {
    const filteredData = studentInternships.filter((internship) => {
      const matchesSearchText =
        internship.rollNumber.toLowerCase().includes(text.toLowerCase()) ||
        internship.name.toLowerCase().includes(text.toLowerCase()) ||
        internship.company.toLowerCase().includes(text.toLowerCase()) ||
        internship.time.toLowerCase().includes(text.toLowerCase());

      if (criteria === "All") {
        return matchesSearchText;
      } else if (criteria === "Company") {
        return (
          matchesSearchText &&
          internship.company.toLowerCase().includes(text.toLowerCase())
        );
      } else if (criteria === "Time") {
        return (
          matchesSearchText &&
          internship.time.toLowerCase().includes(text.toLowerCase())
        );
      }

      return false;
    });

    setFilteredInternships(filteredData);
  };

  return (
    <div>
      <TeacherNavbar />
      <h1 className="text-4xl font-bold my-4 text-center">
        Student Internships
      </h1>
      <div className="my-4 mx-8">
        <input
          type="text"
          placeholder="Search by Roll Number, Name, Company, or Time"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          className="p-2 border rounded-md w-full"
        />
      </div>
      <div className="my-4 mx-8">
        <label className="mr-2">Filter by:</label>
        <select
          value={filterCriteria}
          onChange={(e) => handleFilterChange(e.target.value)}
          className="p-2 border rounded-md"
        >
          <option value="All">All</option>
          <option value="Company">Company</option>
          <option value="Time">Time</option>
        </select>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roll Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Company
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time of Internship
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredInternships.map((internship) => (
            <tr key={internship.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {internship.rollNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{internship.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {internship.company}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{internship.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default TeacherInternship;
