import React from "react";
import PropTypes from "prop-types";
import "./Admin.css";
import { Link } from "react-router-dom";

const Admin = ( ) => {
  return (
    <section className="Landing">
      <div className="dark-overlay">
        <div className="landing-inner">
       
          <div className="buttons">
            <ul className="navbar">
              <li className="nav-bar"><Link to="/dealers">dealers</Link></li>
              <li className="nav-bar"><Link to="users">users</Link></li>
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Admin;
