import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";


const Signup = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        classy: "", // add this
        year: "", // add this
        email: "",
        contact: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:5000/api/users/adduser";
            const { data: res } = await axios.post(url, data);
            console.log("Done");
            navigate("/login",{replace: true, state: { id: res.userId }});
            console.log(res.userId);
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
                        <h1>Create Account</h1>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstname"
                            onChange={handleChange}
                            value={data.firstname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastname"
                            onChange={handleChange}
                            value={data.lastname}
                            required
                            className={styles.input}
                        />
                        <input
                            type="text"
                            placeholder="Class"
                            name="classy"
                            onChange={handleChange}
                            value={data.classy}
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
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
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
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                            value={data.password}
                            required
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