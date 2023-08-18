import "./ClientData.scss";

const ClientData = () => {
    return (
        <div className="container">
            <div className="client">
                <img className="img" src="https://via.placeholder.com/70x70" />
                <div className="name">Ronald</div>
            </div>

            <div className="details">
                <div className="row">
                    <div className="element">
                        <h1>Email</h1>
                        <input />
                    </div>
                    <div className="element">
                        <h1>Phone No.</h1>
                        <input />
                    </div>
                </div>
            </div>

            <div className="buttons"></div>
        </div>
    );
};

export default ClientData;
