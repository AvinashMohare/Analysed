import classes from "./Chats.module.scss";

const Chats = () => {
    return (
        <div className={classes.rootChats}>
            <div className={classes.header}>
                <div className={classes.userImage}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
                        alt="userName"
                    />
                </div>

                <div className={classes.userName}>
                    <p>Ronald</p>
                </div>
            </div>
            <div className={classes.m1}>
                <div className={classes.profilePic}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
                        alt="userName"
                    />
                </div>
                <div className={classes.message}>
                    <p>
                        Hi, I'm experiencing some pain in my lower back. I was
                        wondering if you could help me as a physiotherapist?
                    </p>
                </div>
            </div>

            <div className={classes.m2}>
                <div className={classes.message}>
                    <p>
                        Can you please tell me more about the nature of your
                        pain?
                    </p>
                </div>
            </div>

            <div className={classes.m1}>
                <div className={classes.profilePic}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTte_W3r44Rc7MYnXPQZLP-z3pfAJCKJuz1GA&usqp=CAU"
                        alt="userName"
                    />
                </div>
                <div className={classes.message}>
                    <p>
                        The pain started about a week ago after lifting a heavy
                        object. It's a sharp, shooting pain in my lower back,
                        and it gets worse when I bend or twist my body.
                    </p>
                </div>
            </div>

            <div className={classes.m2}>
                <div className={classes.message}>
                    <p>
                        Hi, I'm experiencing some pain in my lower back. I was
                        wondering if you could help me as a physiotherapist?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Chats;
