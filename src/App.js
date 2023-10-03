import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Signup from "./pages/SignUp/signup";

import "./App.css";
import LoginAdmin from "./admin/Login/adminLogin";
import AdminHome from "./admin/Home/adminHome";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Signup />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="loginadmin" element={<LoginAdmin />} />
                    <Route path="/adminhome" element={<AdminHome />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
