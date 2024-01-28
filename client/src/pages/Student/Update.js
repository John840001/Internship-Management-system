import React, { useState } from 'react';

const StudentUpdate = () => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [internshipName, setInternshipName] = useState('');
    const [internshipTime, setInternshipTime] = useState('');
    const [internshipCompany, setInternshipCompany] = useState('');
    const [internshipRole, setInternshipRole] = useState('');
    const [achievementDetails, setAchievementDetails] = useState('');
    const [achievementLevel, setAchievementLevel] = useState('');
    const [paperPublishedName, setPaperPublishedName] = useState('');
    const [certificationName, setCertificationName] = useState('');
    const [certificationTime, setCertificationTime] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform form validation here

        // Set submitting state to true
        setSubmitting(true);

        // Simulate a server request (replace with actual server logic)
        try {
            // Make an API request to update student details
            // await updateStudentDetails({...yourFormData});

            // Reset form fields
            setName('');
            setRollNumber('');
            setEmail('');
            setContact('');
            setPassword('');
            setInternshipName('');
            setInternshipTime('');
            setAchievementDetails('');
            setAchievementLevel('');
            setPaperPublishedName('');
            setCertificationName('');
            setCertificationTime('');

            // Display success message or redirect to a different page
            console.log('Details updated successfully!');
        } catch (error) {
            // Handle error (display error message or log it)
            console.error('Error updating student details:', error.message);
        } finally {
            // Reset submitting state
            setSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-8">Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                {/* ... (existing form fields) */}

                {/* Additional fields for internship */}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipName">
                        Internship Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipName" 
                        type="text" 
                        placeholder="Internship Name" 
                        value={internshipName} 
                        onChange={(e) => setInternshipName(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipTime">
                        Internship Time
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipTime" 
                        type="text" 
                        placeholder="Internship Time" 
                        value={internshipTime} 
                        onChange={(e) => setInternshipTime(e.target.value)}
                    />
                </div>


                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipTime">
                        Internship Company
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipTime" 
                        type="text" 
                        placeholder="Internship Company" 
                        value={internshipCompany} 
                        onChange={(e) => setInternshipCompany(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipTime">
                        Internship Role
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipRole" 
                        type="text" 
                        placeholder="Internship Role" 
                        value={internshipRole} 
                        onChange={(e) => setInternshipRole(e.target.value)}
                    />
                </div>
                {/* Similar sections for achievement, paper published, and certification */}

                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={submitting}
                    >
                        {submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
};




export default StudentUpdate;