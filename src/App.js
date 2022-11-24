import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

import OrganizationHome from "./components/pages/OrganizationHome";
import UserEdit from "./components/pages/UserEdit";
import Notifications from "./components/pages/Notifications";

import SignUp from "./components/pages/SignUp";
import Recovery from "./components/pages/Recovery";
import Pipes from "./components/pages/Pipes";
import Members from "./components/pages/Members";

import "./styles/personalize.css";
import "./styles/stylePessoal.css";
/* import "./styles/sb-admin-2.css"; */
/* import "./styles/sb-admin-2.min.css"; */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/accounts/recovery" element={<Recovery />} />

        <Route path="/organization/:id" element={<OrganizationHome />} />
        <Route path="/organization/:id/members" element={<Members />} />
        <Route path="/user/:id/edit" element={<UserEdit />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="pipes/:id" element={<Pipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
