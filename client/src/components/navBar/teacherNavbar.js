import { Link } from "react-router-dom";

const TeacherNavbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/teacher"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Profile
                </Link>

                <Link
                  to="/teacher/internship"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Internship Data
                </Link>

                <Link
                  to="/teacher/Results"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Results Data
                </Link>

                <Link
                  to="/teacher/teacherCertification"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Certifications
                </Link>

                <Link
                  to="/teacher/teacherPaper"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Paper Publications  
                </Link>

                <Link
                  to="/teacher/achievements"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Achievements  
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/teacher"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Student Management System
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TeacherNavbar;
