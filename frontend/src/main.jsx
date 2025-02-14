import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Login from "./Login";
import Protected from "./Protected";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/protected" element={<Protected />} />
        </Routes>
    </Router>
);
