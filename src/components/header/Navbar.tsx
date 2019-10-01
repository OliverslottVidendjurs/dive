import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

type NavbarProps = {
    onNavigation(): void
}

function Navbar({onNavigation}: NavbarProps) {
    useEffect(() => {
        const links = document.querySelectorAll<HTMLAnchorElement>(`.${styles.list} li a`);
        links.forEach((link) => {
            link.addEventListener("click", onNavigation);
        });
        return () => {
            links.forEach((link) => {
                link.removeEventListener("click", onNavigation);
            });
        }
    });
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink activeClassName={styles.active} exact to="/"><span>HOME</span></NavLink>
                </li>
                <li>
                    <NavLink activeClassName={styles.active} to="/equipment"><span>DYKKERUDSTYR</span></NavLink>
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