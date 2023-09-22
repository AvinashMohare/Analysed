import classes from "../../pages/Login/Login.module.scss";
import login from "../../assets/login.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function LoginAdmin() {
    const navigate = useNavigate();
    const [adminInfo, setAdminInfo] = useState({
        email: "",
        password: "",
    });

    const [errorMessage, setErrorMessage] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Check if the authenticated admin exists in the "Admins" collection
            const adminsRef = collection(db, "Admins");
            const q = query(adminsRef, where("email", "==", adminInfo.email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.empty) {
                setErrorMessage("Admin not found.");
            } else {
                const adminData = querySnapshot.docs[0].data();
                // Compare the entered password with the password in Firebase (assuming it's plain text)
                if (adminInfo.password === adminData.password) {
                    console.log("Admin logged in successfully!");
                    navigate("/adminhome");
                } else {
                    setErrorMessage("Invalid email or password.");
                }
            }
        } catch (error) {
            console.error("Error logging in admin: ", error);
            setErrorMessage("Invalid email or password.");
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
                                        name="email"
                                        value={adminInfo.email}
                                        onChange={handleInputChange}
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
                                        name="password"
                                        value={adminInfo.password}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {errorMessage && (
                            <p className="error">{errorMessage}</p>
                        )}

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
