import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handShow] = useState(false);
  // Nav bar will be shown after scrolling down 100px
  const transitionNavBar = ( ) => {
    if (window.scrollY > 100) {
      handShow(true);
    } else {
      handShow(false);
    }
    };
// Effects to run on load and scroll
    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener("scroll", transitionNavBar); 
    }, []);
    
    
  return (
    // contents of the nav bar
    <div className={`Nav ${show && "Nav__black"}`}>
        <div className="Nav__contents">

        </div>
      <img
      className="Nav__logo"
        src="https://wallpapers.com/images/featured/netflix-logo-png-fqwt81hprrz7xsfg.png"
        alt=""
      />

      <img
      className="Nav__avatar"
        src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
        alt=""
      />
    </div>
  );
}

export default Nav;