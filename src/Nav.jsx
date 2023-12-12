import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", transitionNavBar)
    return ()=> window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
