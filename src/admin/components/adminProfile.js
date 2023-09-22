import classes from "../../styles/Profile.module.scss";

const Profile = () => {
    const defaultImage =
        "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=";

    return (
        <div className={classes.rootProfile}>
            <div className={classes.userPicture}>
                <img src={defaultImage} alt="profile"></img>
            </div>
            <p className={classes.name}>Admin</p>
        </div>
    );
};

export default Profile;
