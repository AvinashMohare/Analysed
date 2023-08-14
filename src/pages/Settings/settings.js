import classes from "./Settings.module.css";


const Settings = () => {
    return (
        <div>
            <div className={classes.Settings}>
                <div className={classes.ResetFrame}>
                    <button className={classes.ResetButton}>
                        RESET PASSWORD
                    </button>
                </div>
                <div className={classes.cover}>
                    <div className={classes.referralCode}>
                        <p>Referral Code</p>
                    </div>
                </div>
                <img
                    className={classes.ProfileImg}
                    src="https://via.placeholder.com/150x150"
                />
                <div className={classes.ProfileName}>Profile</div>
                <div className={classes.UpdateDetails}>
                    Update your photo and personal details
                </div>

                <div className={classes.SaveGroup}>
                    <button className={classes.SaveRectangle} />
                    <div className={classes.Save}>Save</div>
                </div>

                <div className={classes.CancelGroup}>
                    <button className={classes.CancelRectangle} />
                    <div className={classes.Cancel}>Cancel</div>
                </div>

                <div className={classes.InputContainer}>
                    <div className={classes.firstrow}>
                        <div className={classes.InputText1}>User ID:</div>
                        <div>
                            <input className={classes.SmallBox1} />
                        </div>

                        <div className={classes.InputText1}>User Name:</div>
                        <div>
                            <input className={classes.SmallBox2} />
                        </div>
                    </div>

                    <div className={classes.secondrow}>
                        <div className={classes.InputText2}>Name:</div>
                        <div>
                            <input className={classes.LargeBox} />
                        </div>
                    </div>

                    <div className={classes.thirdrow}>
                        <div className={classes.InputText1}>Email:</div>
                        <div>
                            <input className={classes.SmallBox1} />
                        </div>

                        <div className={classes.InputText1}>Contact No.:</div>
                        <div>
                            <input className={classes.SmallBox2} />
                        </div>
                    </div>

                    <div className={classes.fourthrow}>
                        <div className={classes.InputText1}>Gender:</div>
                        <div>
                            <input className={classes.SmallBox1} />
                        </div>

                        <div className={classes.InputText1}>Age:</div>
                        <div>
                            <input className={classes.SmallBox2} />
                        </div>
                    </div>

                    <div className={classes.fifthrow}>
                        <div className={classes.InputText3}>Experience:</div>
                        <div>
                            <input className={classes.LargeBox} />
                        </div>
                    </div>

                    <div className={classes.Sixthrow}>
                        <div className={classes.InputText4}>Your Bio:</div>

                        <textarea className={classes.TextArea} />
                    </div>

                    <div className={classes.LogoutFrame}>
                        <button className={classes.LogoutButton}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
