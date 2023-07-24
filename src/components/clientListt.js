import classes from "../styles/ClientList.module.scss";
import "../styles/clientListt.css";
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

const ClientListt = () => {
  return (
    <div className={classes.rootClientlist}>
      <div className={classes.heading}>
        <span className={classes.head}>Client Lists</span>

        <div className={classes.button}>
          <span>View All</span>
        </div>
      </div>

      <table>
        <tr></tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>
                <div className="box">
                  <div className="frame-wrapper">
                    <div className="frame">
                      <div className="group">
                        <div className="group-wrapper">
                          <div className="div">
                            <img
                              className="fiona-profile-image"
                              alt="Fiona profile image"
                              src={val.user}
                            />
                            <div className="div-wrapper">
                              <div className="group-2">
                                <h1 className="text-wrapper">{val.name}</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-2">
                        <div className="text-wrapper-2">View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="box">
                  <div className="frame-wrapper">
                    <div className="frame">
                      <div className="group">
                        <div className="group-wrapper">
                          <div className="div">
                            <img
                              className="fiona-profile-image"
                              alt="Fiona profile image"
                              src={val.user}
                            />
                            <div className="div-wrapper">
                              <div className="group-2">
                                <h1 className="text-wrapper">{val.name}</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-2">
                        <div className="text-wrapper-2">View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ClientListt;
