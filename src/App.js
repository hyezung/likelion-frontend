import "./App.css";
import "./font.css";
import React from "react";
import Header from "./components/header";
import Login from "./pages/Login";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import NewsList from "./pages/news";
import TextbookList from "./pages/textbook";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/News" element={<NewsList />} />
        <Route path="/Textbook" element={<TextbookList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
