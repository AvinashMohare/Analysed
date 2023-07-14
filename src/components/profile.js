import classes from "../styles/Profile.module.scss";

const Profile = (props) => {
    return (
        <div className={classes.rootProfile}>
            <div className={classes.userPicture}>
                <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    alt="profile"
                ></img>
            </div>
            <p class={classes.name}>
                {props.name}
                <span>Lorem Ipsum Lorem sum</span>
            </p>
        </div>
    );
};

export default Profile;
