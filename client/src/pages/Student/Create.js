import React, { useState } from 'react';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const EditProfile = (props) => {
    // const [firstname, setName1] = useState('');
    // const [lastname, setName2] = useState('');
    // const [classy, setClass] = useState('');
    // const [year, setYear] = useState('');
    // const [email, setEmail] = useState('');
    // const [contact, setContact] = useState('');
    // const [password, setPassword] = useState('');
    // const { test } = useLocation(); 
    const location=useLocation();
    console.log(location);
    var fieldNames=[];
    var call="api_";
    const p=location.state.id;
    const id=location.state.iid;
    console.log("Test");
    console.log(p);
    console.log(id);
    if(p===0)
{        fieldNames = ["firstname", "lastname", "classy", "year", "email", "contact", "password"];
call+="edit";
}    
else if(p===1){
           fieldNames = ["name", "rollNumber", "company", "role", "duration"];
           call+="internship";

}
else if (p===2){
    fieldNames = ["name", "rollNumber", "achievement", "year", "level"];
    call+="achievemnt";

}
else if(p===3){
    fieldNames = ["name","certificatename", "rollNumber", "certificateLink"];
    call+="certificate";

}
else if(p===4){
  fieldNames = ["name", "rollNumber", "publicationLink"];
  call+="publication";

}
else{
    fieldNames=[]
}
    // Create state variables dynamically
    const initialState = {};
    fieldNames.forEach((fieldName) => {
      initialState[fieldName] = '';
    });
    const [state, setState] = useState(initialState);
    // const student={
    //     firstname,
    //     lastname,
    //     classy,
    //     year,
    //     email,
    //     contact,
    //     password
    // };
    // const [paperPublishedName, setPaperPublishedName] = useState('');
    // const [certificationName, setCertificationName] = useState('');
    // const [certificationTime, setCertificationTime] = useState('');
//     const firstElementsArray = [name, rollNumber, password, internshipName, internshipTime, achievementDetails, achievementLevel, paperPublishedName, certificationName, certificationTime];
// firstName: { type: String, required: true },
// 	lastName: { type: String, required: true },
// 	class:	{ type: String, required: true },
// 	year: { type: String, required: true },
// 	email: { type: String, required: true },
// 	contact: { type: Number, required: true},
// 	password: { type: String, required: true },
//   // Array with the second elements of all lines
//   const secondElementsArray = [setName, setRollNumber, setPassword, setInternshipName, setInternshipTime, setAchievementDetails, setAchievementLevel, setPaperPublishedName, setCertificationName, setCertificationTime];
const handleFieldChange = (fieldName, value) => {
    setState((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };
  const student = {};
  const navigate = useNavigate();
  fieldNames.forEach((fieldName) => {
    student[fieldName] = state[fieldName];
  });
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();
    student["id"]=id;
    console.log(student);
        // perform form validation and send updated details to server
        axios
      .post(`http://localhost:5000/api/users/${call}`, student)
      .then(() => console.log('Book Created'))
      .catch(err => {
        console.error(err);
      });
      window.location = "/student";
    };
    return (
        <div className="container mx-auto px-4 py-8">
       <h2 className="text-3xl font-semibold mb-8">Edit Student Details</h2>
      <form onSubmit={handleSubmit}>
          {fieldNames.map((fieldName) => (
            <div key={fieldName} className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={fieldName}>
                {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={fieldName}
                type="text"
                placeholder={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                value={state[fieldName]}
                onChange={(e) => handleFieldChange(fieldName, e.target.value)}
              />
              
            </div>
            
            ))}
            <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        // onClick={() => {navigate("/student")}}
                    >
                        Submit
                    </button>
            </form>
        </div>
    );
    // return (
    //     <div className="container mx-auto px-4 py-8">
    //         <h2 className="text-3xl font-semibold mb-8">Edit Student Details</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
    //                     First Name
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="name" 
    //                     type="text" 
    //                     placeholder="Name" 
    //                     value={firstname} 
    //                     onChange={(e) => setName1(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
    //                     Roll Number
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="rollNumber" 
    //                     type="text" 
    //                     placeholder="Roll Number" 
    //                     value={lastname} 
    //                     onChange={(e) => setName2(e.target.value)}
    //                 />
    //             </div>
                
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipName">
    //                     Class
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="internshipName" 
    //                     type="text" 
    //                     placeholder="Internship Name" 
    //                     value={classy} 
    //                     onChange={(e) => setClass(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipTime">
    //                     Year
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="internshipTime" 
    //                     type="text" 
    //                     placeholder="Internship Time" 
    //                     value={year} 
    //                     onChange={(e) => setYear(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievementDetails">
    //                     Email
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="achievementDetails" 
    //                     type="text" 
    //                     placeholder="Achievement Details" 
    //                     value={email} 
    //                     onChange={(e) => setEmail(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievementLevel">
    //                     Contact
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="achievementLevel" 
    //                     type="text" 
    //                     placeholder="Achievement Level" 
    //                     value={contact} 
    //                     onChange={(e) => setContact(e.target.value)}
    //                 />
    //             </div>
    //             <div className="mb-4">
    //                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
    //                     Password
    //                 </label>
    //                 <input 
    //                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                     id="date" 
    //                     type="password" 
    //                     placeholder="Date" 
    //                     value={password}
    //                     onChange={(e) => setPassword(e.target.value)}
                        
    //                 />
    //             </div>
    //             <div className="flex items-center justify-between">
    //                 <button 
    //                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //                     type="submit"
    //                 >
    //                     Submit
    //                 </button>
                    
    //             </div>
    //         </form>
    //     </div>
    // );
};

export default EditProfile;
