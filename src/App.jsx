import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/MyNav";
import About from "./components/About";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<BookList />} />
                <Route path="/about" element={<About />} />
            </Routes>
			<Footer />
        </Router>
    );
}

export default App;
