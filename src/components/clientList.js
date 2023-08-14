import classes from "../styles/ClientList.module.scss";
import ClientFetcher from "./data_fetch/clientFetcher";
import { useState } from "react";

const defaultUrl =
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=8";

const ClientList = () => {
    const [clients, setClients] = useState([]);

    const handleClientsFetched = (fetchedClients) => {
        setClients(fetchedClients);
    };

    return (
        <div className={classes.rootClientlist}>
            <div className={classes.heading}>
                <span className={classes.head}>Client Lists</span>

                <div className={classes.button}>
                    <span>View All</span>
                </div>
            </div>

            {/* Fetch the data of the clients */}
            <ClientFetcher onClientsFetched={handleClientsFetched} />

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Phone no</th>
                        {/* <th>Exercises</th> */}
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => {
                        return (
                            <tr key={index}>
                                <td className={classes.profilePic}>
                                    <img
                                        src={defaultUrl}
                                        alt={client.userName}
                                    />
                                </td>
                                <td>{client.userName}</td>
                                <td>{client.userWeight}</td>
                                <td>{client.userGender}</td>
                                <td>{client.phone}</td>
                                {/* <td>{val.exercise}</td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ClientList;
