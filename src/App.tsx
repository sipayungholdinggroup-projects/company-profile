import { Route, Routes } from "react-router-dom";
import Home from "./pages/Index";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProgramPage from "./pages/Program";
import About from "./pages/Tentang";
import Contact from "./pages/Kontak";
import PropertyDetail from "./pages/PropertyDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/program/:slug" element={<PropertyDetail />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
