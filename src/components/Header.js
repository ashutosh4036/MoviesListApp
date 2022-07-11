import React from "react";
import { Link , useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
 const Header = () => {
  const { logOut} = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/home">MoviesList</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/home">Watch List</Link>
            </li>

            <li>
              <Link to="/watched">Watched</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Add
              </Link>
            </li>
            <li>
              <Link to ="/" className = "btn btn-main" onclick={handleLogout}>LogOut</Link>
            </li> 
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;