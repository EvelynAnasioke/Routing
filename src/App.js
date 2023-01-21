import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tower from "./components/Tower";
import Hotel from "./components/Hotel";
import Triomphe from "./components/Triomphe";
import Grande from "./components/Grande";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tower" element={<Tower />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/triomphe" element={<Triomphe />} />
        <Route path="/grande" element={<Grande />} />
      </Routes>
    </>
  );
}

export default App;
