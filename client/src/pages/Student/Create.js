import React, { useState } from 'react';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [email, setemail] = useState('');
    const [Contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [internshipName, setInternshipName] = useState('');
    const [internshipTime, setInternshipTime] = useState('');
    const [achievementDetails, setAchievementDetails] = useState('');
    const [achievementLevel, setAchievementLevel] = useState('');
    const [paperPublishedName, setPaperPublishedName] = useState('');
    const [certificationName, setCertificationName] = useState('');
    const [certificationTime, setCertificationTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // perform form validation and send updated details to server
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-8">Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
                        Roll Number
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rollNumber" 
                        type="text" 
                        placeholder="Roll Number" 
                        value={rollNumber} 
                        onChange={(e) => setRollNumber(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
                        Email
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" 
                        type="text" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
                        Contact
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="Contact" 
                        type="text" 
                        placeholder="Roll Number" 
                        value={Contact} 
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
                
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                    
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
