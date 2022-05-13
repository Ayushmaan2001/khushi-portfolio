import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import ViewPrices from "./Pages/ViewPrices";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
        <Route element={<Home />} exact path="/" />
        <Route element={<ContactUs />} path="/contactus" />
        <Route element={<MyWork />} path="/mywork" />
        <Route element={<ViewPrices />} path="/viewprices" />
      </Routes>
    </div>
  );
}

export default App;
