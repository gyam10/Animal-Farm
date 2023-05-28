import Features from "./components/Features";
import { Route, Routes } from "react-router-dom";
import InfoBar from "./components/InfoBar";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <InfoBar />
      <NavBar />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/features" element={<Features />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
