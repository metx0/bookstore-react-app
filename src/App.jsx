import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/MyNav";
import About from "./components/About";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/registration/Login";
import Register from "./components/registration/Register";

import "./App.css";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                {/* Protected routes */}
                <Route
                    path="/"
                    element={<PrivateRoute element={<BookList />} />}
                />
                <Route
                    path="/about"
                    element={<PrivateRoute element={<About />} />}
                />

                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
