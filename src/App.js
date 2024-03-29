import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NewListing from "./Pages/NewListing/NewListing";
import FeatureListing from "./Pages/FeatureListing/FeatureListing";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import Properties from "./Pages/Properties/Properties";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ListHome from "./Pages/ListHome/ListHome";



function App() {
  return (
  <Routes>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="properties" element={<Properties/>}/>
    <Route path="list-home" element={<ListHome/>}/>
    <Route path="new-listing" element={<NewListing/>}/>
    <Route path="feature-listing" element={<FeatureListing/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="signup" element={<SignUp/>}/>
    <Route path="forgotpassword" element={<ForgotPassword/>}/>
  </Routes>
  );
}

export default App;
