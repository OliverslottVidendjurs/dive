import React from "react";
import Navbar from "./Navbar";
import logo from "../../assets/img/ScubaLiving_logo_small.svg";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";

function Header(){
    return (
        <header className={styles.flex}>
            <img src={logo} alt=""/>
            <Navbar/>
            <SearchBar/>
            <LoginButton/>
        </header>
    )
}

export default Header;