import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import AdminHome from "./pages/Admin";
import AdminStudentData from "./pages/Admin/studentData";
import AdminDelete from "./pages/Admin/Delete";
import AdminTeacherData from "./pages/Admin/teacherData";

import StudentHome from "./pages/Student";
import StudentReplace from "./pages/Student/Replace";
import StudentDelete from "./pages/Student/Delete";
import StudentUpdate from "./pages/Student/Update";
import EditProfile from "./pages/Student/Create";
import StudentData from "./pages/Student/viewData";

import TeacherHome from "./pages/Teacher";
import TeacherResults from "./pages/Teacher/Results";
import TeacherCertification from "./pages/Teacher/teacherCertification";
import TeacherPaper from "./pages/Teacher/teacherPaper";
import TeacherInternship from "./pages/Teacher/Internship";
import TeacherAchievement from "./pages/Teacher/achievements";

import Footer from "./components/footer";

function App() {
  const role = localStorage.getItem("role");

  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/student-data" element={<AdminStudentData />} />
        <Route path="/delete" element={<AdminDelete />} />
        <Route path="/Teacher-data" element={<AdminTeacherData />} />
        <Route path="/create" element={<Register />} />
      </Routes>
    );
  };

  const StudentRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<StudentHome />} />
        <Route path="/replace" element={<StudentReplace />} />
        <Route path="/delete" element={<StudentDelete />} />
        <Route path="/student/Upload" element={<StudentUpdate />} />
        <Route path="/student/Create" element={<EditProfile />} />
        <Route path="/student" element={<StudentData />} />
      </Routes>
    );
  };

  const TeacherRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<TeacherHome />} />
        <Route path="/results" element={<TeacherResults />} />
        <Route
          path="/teacherCertification"
          element={<TeacherCertification />}
        />
        <Route path="/teacherPaper" element={<TeacherPaper />} />
        <Route path="/internship" element={<TeacherInternship />} />
        <Route path="/achievements" element={<TeacherAchievement />} />
      </Routes>
    );
  };

  const HomeRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    );
  };

  const renderRoutes = () => {
    if (role === "admin") return AdminRoutes();
    else if (role === "student") return StudentRoutes();
    else if (role === "teacher") return TeacherRoutes();
    else return HomeRoutes();
  };

  return (
    <BrowserRouter>
      {renderRoutes()}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
