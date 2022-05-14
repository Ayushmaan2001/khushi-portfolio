import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import CreativeMakeup from "./Pages/CreativeMakeup";
import CommercialShoots from "./Pages/CommercialShoots";
import Wedding from "./Pages/Wedding";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<ContactUs />} path="/contactus" />
        <Route element={<CreativeMakeup />} path="/creativemakeup" />
        <Route element={<CommercialShoots />} path="/commercialshoots" />
        <Route element={<Wedding />} path="/wedding" />
      </Routes>
    </div>
  );
}

export default App;
