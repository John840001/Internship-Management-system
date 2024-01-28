import React, { useState, useEffect } from "react";
import StudentNavBar from "../../components/navBar/studentNavbar";

const dummyStudentData = {
  name: "John Doe",
  email: "johndoe@example.com",
  contact: "123-456-7890",
  internships: [
    {
      company: "ABC Inc",
      role: "Software Engineer",
      duration: "6 months",
    },
    {
      company: "XYZ Corp",
      role: "Web Developer",
      duration: "4 months",
    },
  ],
  achievements: ["First Place in Coding Competition", "Honor Roll Student"],
  papersPublished: [
    "Paper on Machine Learning in Conference XYZ",
    "Research Paper on AI in Journal ABC",
  ],
  certifications: ["Certified Web Developer", "AWS Certified Cloud Practitioner"],
  results: [
    {
      semester: "Spring 2023",
      subject: "Mathematics",
      result: "A",
    },
    {
      semester: "Spring 2023",
      subject: "Computer Science",
      result: "B+",
    },
    {
      semester: "Fall 2022",
      subject: "Physics",
      result: "A-",
    },
  ],
};

const StudentData = () => {
  const [studentData, setStudentData] = useState(dummyStudentData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading by setting a timeout
    setLoading(true);
    setTimeout(() => {
      setStudentData(dummyStudentData);
      setLoading(false);
    }, 2000); // Simulate a 2-second loading delay
  }, []);

  return (
    <div>
      <StudentNavBar />
      <div className="p-8 bg-blue-200">
        <h1 className="text-7xl font-bold ">Student Data</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-8">
            
              
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Internships</h2>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Company</th>
                    <th className="px-4 py-2">Role</th>
                    <th className="px-4 py-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.internships.map((internship, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{internship.company}</td>
                      <td className="px-4 py-2">{internship.role}</td>
                      <td className="px-4 py-2">{internship.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <ul className="list-disc list-inside">
                {studentData.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Papers Published</h2>
              <ul className="list-disc list-inside">
                {studentData.papersPublished.map((paper, index) => (
                  <li key={index}>{paper}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Certifications</h2>
              <ul className="list-disc list-inside">
                {studentData.certifications.map((certification, index) => (
                  <li key={index}>{certification}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Results</h2>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Semester</th>
                    <th className="px-4 py-2">Subject</th>
                    <th className="px-4 py-2">Result</th>
                  </tr>
                </thead>
                <tbody>
                  {studentData.results.map((result, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">{result.semester}</td>
                      <td className="px-4 py-2">{result.subject}</td>
                      <td className="px-4 py-2">{result.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentData;
