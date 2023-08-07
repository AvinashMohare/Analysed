import classes from "./temp.module.css";

function Login() {
    return (
        <div className={classes.LogInPage}>
            <div className={classes.IcBaselineSearch} />
            <div className={classes.ForgotPassword}>
                <a>Forgot Password?</a>
            </div>
            <div className={classes.Group1}>
                <div className={classes.LoginLogo}>Login</div>
                <div className={classes.Group2}>
                    <div className={classes.Group3}>
                        <button className={classes.LoginFrame}>
                            <div className={classes.LogInButton}>Log In</div>
                            <div className={classes.FrameArrow}>
                                <div className={classes.VectorArrow}></div>
                            </div>
                        </button>
                        <div className={classes.RegisterHere}>
                            <a>
                                Don’ t have an account?
                                <br />
                                Register here
                            </a>
                        </div>
                        <div className={classes.Group4}>
                            <div className={classes.PasswordGroup}>
                                <div className={classes.Password}>Password</div>
                                <div className={classes.PasswordInputGroup}>
                                    <input className={classes.InputRectangle} />
                                    <img
                                        className={classes.SecurityShield}
                                        src="https://via.placeholder.com/32x32"
                                    />
                                    <div className={classes.MdiEyeOff}>
                                        <div
                                            className={classes.VectorEye}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.EmailGroup}>
                                <div className={classes.Email}>Email</div>
                                <div className={classes.EmailInputGroup}>
                                    <input className={classes.InputRectangle} />
                                    <img
                                        className={classes.SecuredLetter}
                                        src="https://via.placeholder.com/32x32"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                </div>

                <div className={classes.ShapeGroup}>
                    <div className={classes.Ellipse3} />
                    <div className={classes.Ellipse2} />
                    <div className={classes.Ellipse1} />
                </div>
                <img
                    className={classes.PeopleImage}
                    src="https://via.placeholder.com/523x523"
                />
            </div>
        </div>
    );
}

export default Login;
