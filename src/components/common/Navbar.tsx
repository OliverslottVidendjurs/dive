import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";

function Navbar(){
    return(
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink activeClassName={styles.active} exact to="/"><span>HOME</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/equipment"><span>DYKKEUDSTYR</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/trips"><span>DYKKERREJSER</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/courses"><span>DYKKERKURSER</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/contact"><span>KONTAKT</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/about"><span>OM OS</span></NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;