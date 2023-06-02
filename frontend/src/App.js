import { Route, Routes } from "react-router-dom";
import { Main, Features, About, Contact } from "./pages/common";
import HomeLayout from "./pages/layout/HomeLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
