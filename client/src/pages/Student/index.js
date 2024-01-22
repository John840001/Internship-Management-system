import React, { useState, useEffect } from "react";
import StudentNavBar from "../../components/navBar/studentNavbar";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";

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
const data_default=
{
  firstname:"",
  lastname:"",
  classy:"",
  year:"",
  email:"",
  contact:"",
  password:""
}
const intern_default=
[{
  company:"",
  role:"",
  duration:"",
  }]

const achieve_default=
[{
  name:"",
  year:"",
  level:"",
  }]

const cert_default=
[{
  name:"",
  certificatename:"",
  certificateLink:"",
  rollNumber:"",
  }]
  const pub_default=
  [{
    name:"",
    paperLink:"",
    rollNumber:"",
    }]
const StudentHome = () =>  {
  const [studentData, setStudentData] = useState(dummyStudentData);
  const [loading, setLoading] = useState(false);
  const userId = sessionStorage.getItem('userId') || null;
  const [id, setid] = useState({
    id: userId
});
const [responseData, setResponseData] = useState(data_default);
const [internData, setInternData] = useState(intern_default);
const [AcieveData, setAcieveData] = useState(achieve_default);
const [CertData, setCertData] = useState(cert_default);
const [PubData, setPubData] = useState(pub_default);



  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(id);
        const response = await axios.post('http://localhost:5000/api/users/api_getdata',id);
        console.log(response);
        const data = response.data.data;
        const intern=response.data.intern;
        const achieve = response.data.achieve;
        const cert = response.data.certificate;
        const pub=response.data.publication;

        // Set the response data in the state
        setResponseData(data);
        setInternData(intern);
        setAcieveData(achieve);
        setCertData(cert);
        setPubData(pub);

        // Now you can also access `data` outside of this function

        console.log(`Hello ${intern}`);
        console.log(`Hello2 ${achieve}`);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // You can also access `responseData` here or in any other part of the component
  console.log('Response Data:', responseData);
  console.log("Test: ",internData);
  console.log("Test: ",AcieveData);
console.log(PubData);
console.log(CertData);

  console.log(`Test ${userId}`);
//   async function getdata()  {
//   const url = "http://localhost:5000/api/users/api_getdata";
//   const { id: res } = await axios.post(url, id).then(res => {
//     // console.log(res.data.data);
//     // this.setState({data: res.data.data});
//     return res.data.data;
//     // this.data=res.data.data;
//     // return res.json();
// });
//   }
//   console.log(getdata(userId));


  // console.log(this.state.data);
  // const location=useLocation();
  // console.log(location.state.id);
  // useEffect(() => {
  //   // Simulate loading by setting a timeout
  //   setLoading(true);
  //   setTimeout(() => {
  //     setStudentData(dummyStudentData);
  //     setLoading(false);
  //   }, 2000); // Simulate a 2-second loading delay
  // }, []);
  const navigate = useNavigate();


  return (
    <div>
      <StudentNavBar />
      <div className="p-8 bg-blue-200">
        <h1 className="text-7xl font-bold ">Student Home</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-8">
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Profile</h2>
              <div className="space-y-2">
                <p className="font-semibold">Name:</p>
                <p>{responseData.firstname} {responseData.lastname}</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Email:</p>
                <p>{responseData.email}</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Contact:</p>
                <p>{responseData.contact}</p>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {navigate("/student/Create",{replace: true, state: { id: 0 }})}}>Edit Profile Data</button>
             
              {/* <Link
                  to="/student/Create"
                  state={0}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Edit Profile
                </Link> */}
            </div>
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
                  {/* {studentData.internships.map((internship, index) => ( */}
                      {internData.map((item) => (
                    <tr key={item.id}>
                        <td className="px-4 py-2">{item.company}</td>
                        <td className="px-4 py-2">{item.role}</td>
                        <td className="px-4 py-2">{item.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {navigate("/student/Create",{replace: true, state: { id: 1 ,iid:userId}})}}>Add Internships</button>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Achievements</h2>
              <ul className="list-disc list-inside">
        {AcieveData.map((item) => (
          <li key={item.id}>
            Name: {item.achievement}, Year: {item.year}, Level: {item.level}
          </li>
        ))}
      </ul>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {navigate("/student/Create",{replace: true, state: { id: 2,iid:userId }})}}>Add Achievemnts</button>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Papers Published</h2>
              <ul className="list-disc list-inside">
              {PubData.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Paper Link: {item.paperLink}
          </li>
        ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {navigate("/student/Create",{replace: true, state: { id: 4 ,iid:userId}})}}>Add Publications</button>
            </div>
            <div className="bg-white p-4 rounded shadow-lg space-y-4">
              <h2 className="text-2xl font-bold">Certifications</h2>
              <ul className="list-disc list-inside">
              {CertData.map((item) => (
          <li key={item.id}>
            Name : {item.certificatename}, Link: {item.certificateLink}
          </li>
        ))}
              </ul>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              onClick={() => {navigate("/student/Create",{replace: true, state: { id: 3 ,iid:userId}})}}>Add Certificates</button>
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

export default StudentHome;
