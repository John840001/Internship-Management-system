import { Link, NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin/student-data"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Student Data
                </Link>

                <Link
                  to="/admin/teacher-data"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Teacher Data
                </Link>
                <Link
                  to="/admin/manage-users"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Manage Users
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/admin"
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

export default AdminNavBar;
