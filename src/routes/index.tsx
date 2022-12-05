import Catdirilma from "pages/Catdirilma";
import Mehsullar from "pages/Mehsullar";
import { Route, Routes } from "react-router-dom";
import About from "pages/About";
import Home from "pages/Home";
import AdminContacts from "pages/AdminContacts";

const WebsiteRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/catdirilma" element={<Catdirilma />} />
      <Route path="/mehsullar" element={<Mehsullar />} />
      <Route path="/admin-contacts" element={<AdminContacts />} />
    </Routes>
  )
}
export default WebsiteRouting;