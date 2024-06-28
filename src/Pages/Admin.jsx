import React, { useState } from "react";
import { useContext } from "react";
import BlogContext from "../context/BlogContext";
import AdminNavbar from "../Components/AdminNavbar";
import Login from "../Components/Login";

const Admin = () => {

  const [ isAuth, setIsAuth ] = useState(true);
  return (
    <>
    {
      !isAuth ? <Login/> : <div>
      <AdminNavbar />
    </div>
    }
      
    </>
  );
};

export default Admin;
