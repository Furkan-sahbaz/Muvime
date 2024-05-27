import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
      <FooterBar />
    </>
  );
}

export default App;
