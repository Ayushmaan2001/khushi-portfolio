import "./App.css";
import ResponsiveAppBar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import CreativeMakeup from "./Pages/CreativeMakeup";
import CommercialShoots from "./Pages/CommercialShoots";
import Wedding from "./Pages/Wedding";

function App() {
  // const commercial_shoots = [];
  // const Home_images = async () => {
  //   const app_ref = ref(storage, "Home/");
  //   await listAll(app_ref)
  //     .then((res) => {
  //       res.items.forEach((itemRef) => {
  //         // All the items under listRef.
  //         getDownloadURL(itemRef).then((url) => {
  //           commercial_shoots.push({ img: url });
  //           // console.log(url);
  //         });
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Uh-oh, an error occurred!
  //     });
  // };
  // Home_images();
  // console.log(commercial_shoots);
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
