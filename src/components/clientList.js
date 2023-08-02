import classes from "../styles/ClientList.module.scss";

const data = [
    {
        user: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",

        name: "Jenny Wilson",
        age: 52,
        gender: "Female",
        phone: 8088808,
        exercise: "Exercise",
    },
    {
        user: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",

        name: "Jenny Wilson",
        age: 52,
        gender: "Female",
        phone: 8088808,
        exercise: "Exercise",
    },
    {
        user: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",

        name: "Jenny Wilson",
        age: 52,
        gender: "Female",
        phone: 8088808,
        exercise: "Exercise",
    },
    {
        user: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",

        name: "Jenny Wilson",
        age: 52,
        gender: "Female",
        phone: 8088808,
        exercise: "Exercise",
    },
    {
        user: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8",
        name: "Jenny Wilson",
        age: 52,
        gender: "Female",
        phone: 8088808,
        exercise: "Exercise",
    },
];

const ClientList = () => {
    return (
        <div className={classes.rootClientlist}>
            <div className={classes.heading}>
                <span className={classes.head}>Client Lists</span>

                <div className={classes.button}>
                    <span>View All</span>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone no</th>
                        <th>Exercises</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td className={classes.profilePic}>
                                    <img src={val.user} alt={val.name} />
                                </td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.gender}</td>
                                <td>{val.phone}</td>
                                <td>{val.exercise}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ClientList;
