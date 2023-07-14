import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
// import Signup from "./pages/SignUp/signup";
import Signup from "./pages/SignUp/signup";
import { auth } from "./firebase";

import "./App.css";

function App() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            } else setUserName("");
        });
    }, []);

    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    {/* <Route path="/signup" element={<Signup />} /> */}
                    <Route path="/" element={<Signup />} />
                    <Route path="/home" element={<Home name={userName} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
