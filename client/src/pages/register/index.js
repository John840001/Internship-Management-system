import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    password: "",
    contact: "",
    class: "",
    year: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              SIGN IN
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create User</h1>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Class"
              name="class"
              onChange={handleChange}
              value={data.class}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Year"
              name="year"
              onChange={handleChange}
              value={data.year}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Contact"
              name="contact"
              onChange={handleChange}
              value={data.contact}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Roll Number"
              name="rollNumber"
              onChange={handleChange}
              value={data.rollNumber}
              required
              className={styles.input}
            />
            <select
              name="role"
              onChange={handleChange}
              value={data.role}
              required
              className={styles.input}
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
