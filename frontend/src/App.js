import {
  Main,
  Features,
  About,
  Contact,
  SignUp,
  Login,
} from "./pages/common/index";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layout/HomeLayout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
