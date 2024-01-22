import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import AdminHome from "./pages/Admin";
import AdminStudentData from "./pages/Admin/studentData";
import AdminDelete from "./pages/Admin/Delete";
import AdminTeacherData from "./pages/Admin/teacherData";
import AdminCreate from "./pages/Admin/Create";

import StudentHome from "./pages/Student";
import StudentReplace from "./pages/Student/Replace";
import StudentDelete from "./pages/Student/Delete";
import StudentUpdate from "./pages/Student/Update";
import EditProfile from "./pages/Student/Create";

import TeacherHome from "./pages/Teacher";
import TeacherResults from "./pages/Teacher/Results";
import TeacherCertification from "./pages/Teacher/teacherCertification";
import TeacherPaper from "./pages/Teacher/teacherPaper";
import TeacherInternship from "./pages/Teacher/Internship";
import TeacherAchievement from "./pages/Teacher/achievements";

// import NavBar from "./components/navBar";
import Footer from "./components/footer";


function App() {
  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/student-data" element={<AdminStudentData />} />
        <Route path="/admin/delete" element={<AdminDelete />} />
        <Route path="/admin/Teacher-data" element={<AdminTeacherData />} />
        <Route path="/admin/create" element={<AdminCreate />} />
      </Routes>
    );
  };

  const StudentRoutes = () => {
    return (
      <Routes>
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/replace" element={<StudentReplace />} />
        <Route path="/student/delete" element={<StudentDelete />} />
        <Route path="/student/update" element={<StudentUpdate />} />
        <Route path="/student/create" element={<EditProfile />} />
      </Routes>
    );
  };

  const TeacherRoutes = () => {
    return (
      <Routes>
        <Route path="/teacher" element={<TeacherHome />} />
        <Route path="/teacher/results" element={<TeacherResults />} />
        <Route path="/teacher/teacherCertification" element={<TeacherCertification />} />
        <Route path="/teacher/teacherPaper" element={<TeacherPaper />} />
        <Route path="/teacher/internship" element={<TeacherInternship />} />
        <Route path="/teacher/achievements" element={<TeacherAchievement/>} />
      </Routes>
    );
  };

  const HomeRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  };

  const renderRoutes = () => {
    if (window.location.href.includes("/admin")) return AdminRoutes();
    else if (window.location.href.includes("/student")) return StudentRoutes();
    else if (window.location.href.includes("/teacher")) return TeacherRoutes();
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
