import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
 

const Header = ({ navigation,Hello }) => {

  return (
    <div className={styles.box}>
      <div className={styles.left}>Er. Abhi Pandit</div>
      <div className={styles.right}>
        <div>
          {navigation.map((item) => {
            return (
              <Link key={item} className={styles.navitem} to="#">
                {item}
              </Link>
            );
          })} 
        </div>
        <div>
          <button onClick={Hello} >Light Mode</button> 
        </div>
      </div> 
    </div>
  );
};

export default Header;
