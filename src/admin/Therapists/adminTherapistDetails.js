import React from "react";
import "../../pages/Clients/ClientData.scss";

const AdminTherapistDetails = ({ therapist, onBackToList }) => {
    return (
        <div className="container1">
            <div className="client">
                <img className="img" src="https://via.placeholder.com/70x70" />
                <div className="name">{therapist.name}</div>
            </div>

            <div className="details">
                <div className="row">
                    <div className="element">
                        <h1>Name</h1>
                        <input value={therapist.name} contentEditable="false" />
                    </div>

                    <div className="element">
                        <h1>Phone No.</h1>
                        <input
                            value={therapist.contactNo}
                            contentEditable="false"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="element">
                        <h1>Email</h1>
                        <input
                            value={therapist.email}
                            contentEditable="false"
                        />
                    </div>
                    <div className="element">
                        <h1>Gender</h1>
                        <input
                            value={therapist.gender}
                            contentEditable="false"
                        />
                    </div>
                </div>

                <div className="buttons">
                    <div className="btn1">
                        <button onClick={onBackToList}>Back</button>
                    </div>
                    <div className="btn2">
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminTherapistDetails;
