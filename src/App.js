import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import ViewPrices from "./Pages/ViewPrices";
import ContactUs from "./Pages/ContactUs";
import Reception from "./Pages/Reception";
import Haldi from "./Pages/Haldi";
import Wedding from "./Pages/Wedding";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<ContactUs />} path="/contactus" />
        <Route element={<MyWork />} path="/mywork" />
        <Route element={<ViewPrices />} path="/viewprices" />
        <Route element={<Reception />} path="/reception" />
        <Route element={<Haldi />} path="/haldi" />
        <Route element={<Wedding />} path="/wedding" />
      </Routes>
    </div>
  );
}

export default App;
