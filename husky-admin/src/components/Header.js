import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Header = (props) => {
  const { getToken } = useContext(AuthContext);

  const logOut = () => {
    console.log(":Nepal");
    localStorage.removeItem("ACCESS_TOKEN_NAME");
    getToken();
    console.log(":Nepal");
  };

  return (
    <nav className="navigation">
      <button onClick={logOut}>
        LogOut
        <i className=" bi bi-box-arrow-right"></i>
      </button>
    </nav>
  );
};

export default Header;
