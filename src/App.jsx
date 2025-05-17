import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CalliopeAI from "./pages/CalliopeAI";
import Vostco from "./pages/Vostco";
import Team from "./pages/Team";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import HeroSection from './components/HeroSection';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import "./App.css";

function App() {
  return (
   
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<><HeroSection /><Home /></>} />
          <Route path="/calliope-ai" element={<CalliopeAI />} />
          <Route path="/vostco" element={<Vostco />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    
  );
}

export default App;

