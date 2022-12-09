import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Books from './components/Books';
import Services from './components/Services';
import Testimonies from './components/Testimonies';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
  <Navbar/>  
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/books" element={<Books />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonies" element={<Testimonies />} />
    </Routes>
    </>
  )
}

export default App;
