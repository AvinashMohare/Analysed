import classes from "../../pages/Login/Login.module.scss";
import login from "../../assets/login.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import { adminUsers } from "./adminUsers";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function LoginAdmin() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const handleLogin = () => {
        // Check if the entered email and password match any admin user
        const adminUser = adminUsers.find(
            (user) =>
                user.email === values.email && user.password === values.pass
        );

        if (adminUser) {
            // Successful login, navigate to the admin panel or perform other actions
            navigate("/adminhome"); // Adjust the path
        } else {
            // Invalid credentials, display an error message or handle as needed
            console.log("Invalid credentials");
        }
    };

    return (
        <div className={classes.rootLogin}>
            <div className={classes.containerMain}>
                <div className={classes.header}>
                    <p>Admin Panel Login</p>
                </div>

                <div className={classes.container}>
                    <div className={classes.left}>
                        <div className={classes.email}>
                            <div className={classes.label}>
                                <p>Email</p>
                            </div>
                            <div className={classes.input}>
                                <div className={classes.icon}>
                                    <MdEmail className={classes.emailIcon} />
                                </div>

                                <div className={classes.inputEmail}>
                                    <input
                                        type="email"
                                        onChange={(event) =>
                                            setValues((prev) => ({
                                                ...prev,
                                                email: event.target.value,
                                            }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.password}>
                            <div className={classes.label}>
                                <p className={classes.pass}>Password</p>
                                <p className={classes.forgot}>
                                    Forgot Password?
                                </p>
                            </div>
                            <div className={classes.input}>
                                <div className={classes.icon}>
                                    <RiLockPasswordFill
                                        className={classes.passwordIcon}
                                    />
                                </div>

                                <div className={classes.inputPassword}>
                                    <input
                                        type="password"
                                        onChange={(event) =>
                                            setValues((prev) => ({
                                                ...prev,
                                                pass: event.target.value,
                                            }))
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.buttons}>
                            <div
                                className={classes.signin}
                                onClick={handleLogin}
                            >
                                <p>Log In</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={login} alt="login"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginAdmin;
