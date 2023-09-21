import React from "react";
import classes from "./Temp.module.scss";

const Login = () => {
    return (
        <div className={classes.rootSignup}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <div className={classes.header}>
                        <div className={classes.heading}>
                            <p className={classes.l1}>Sign Up</p>
                            <p className={classes.l2}>Create an Account</p>
                        </div>
                    </div>
                    <form className={classes.form} action="#">
                        <div className={classes.column}>
                            <div className={classes.inputBox}>
                                <label>First Name</label>
                                <input type="text" placeholder="First_Name" />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Last Name</label>
                                <input type="text" placeholder="Last_Name" />
                            </div>
                        </div>

                        <div className={classes.inputBoxNormal}>
                            <label>Email</label>
                            <input type="text" placeholder="Email" />
                        </div>

                        <div className={classes.column}>
                            <div className={classes.inputBox}>
                                <label>Password</label>
                                <input
                                    type="password"
                                    placeholder="XXXXXXXXXXX"
                                />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    placeholder="XXXXXXXXXXX"
                                />
                            </div>
                        </div>

                        <div className={classes.bio}>
                            <label>Bio</label>
                            <textarea type="text" placeholder="Bio!" />
                        </div>

                        <div className={classes.column2}>
                            <div className={classes.inputBox}>
                                <label>Age</label>
                                <input type="number" min="0" placeholder="XX" />
                            </div>
                            <div className={classes.inputBox}>
                                <label>Gender</label>
                                <select className={classes.gender}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className={classes.inputBox}></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
