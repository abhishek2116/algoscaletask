import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../screens/About";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

type Props = {};

const Routing = (props: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;