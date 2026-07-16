import React from "react";
import {Link} from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div>
      <div className={styles.left}>
        Er. Abhi Pandit
      </div>
      <div className={styles.right}>
        <div>
          <Link to="#">Home</Link>
          <Link to="#">Skills</Link>
          <Link to="#">Projects</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </div>
        <div>
          <button children={styles.toggle}>Light Mode</button>
        </div>
      </div> 
    </div>
  );
};

export default Header;
