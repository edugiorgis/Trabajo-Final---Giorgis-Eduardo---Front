import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Dashboard from "./pages/Dashboard";
import Buy from "./pages/Buy";
import Login from "./pages/Login";
import InitialLogin from "./pages/InitialLogin";
import Succesful from "./pages/Succesful";
import Register from "./pages/Register";
import Banner from "./pages/Banner";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Default />} />
            <Route path="buy" element={<Buy />} />
            <Route path="login" element={<Login />} />
            <Route path="initiallogin" element={<InitialLogin />} />
            <Route path="succesful" element={<Succesful />} />
            <Route path="register" element={<Register />} />
            <Route path="banner" element={<Banner />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
