import React, { useEffect, useState } from "react";
import TeacherNavbar from "../../components/navBar/teacherNavbar";
import axios from "axios";

const TeacherInternship = () => {
  const [studentInternships, setStudentInternships] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterCriteria, setFilterCriteria] = useState("All");
  const [filteredInternships, setFilteredInternships] = useState([]);

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
  }, []); // Empty dependency array to fetch data only once on component mount

  console.log(studentInternships);
  useEffect(() => {
    filterInternships(searchText, filterCriteria);
  }, [searchText, filterCriteria, studentInternships]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  const handleFilterChange = (criteria) => {
    setFilterCriteria(criteria);
  };

  const filterInternships = (text, criteria) => {
    const filteredData = studentInternships.filter((internship) => {
      const rollNumberString = String(internship.rollNumber);

      const matchesSearchText =
        rollNumberString.toLowerCase().includes(text.toLowerCase()) ||
        internship.name.toLowerCase().includes(text.toLowerCase()) ||
        internship.company.toLowerCase().includes(text.toLowerCase()) ||
        internship.duration.toLowerCase().includes(text.toLowerCase());

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
          internship.duration.toLowerCase().includes(text.toLowerCase())
        );
      }

      return false;
    });

    setFilteredInternships(filteredData);
  };

  return (
    <div className="min-h-screen">
      {" "}
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredInternships.map((internship) => (
            <tr key={internship._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {internship.rollNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{internship.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {internship.company}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {internship.duration}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{internship.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeacherInternship;
