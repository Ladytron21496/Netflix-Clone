import React, { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <header className={`header-nav ${show && "header-black"}`}>
      <div>
        <img
          className="nav-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        ></img>
      </div>
      <div>
        <img
          className="nav-avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
        ></img>
      </div>
    </header>
  );
}

export default Nav;
