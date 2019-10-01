import React, {useState} from "react";
import Navbar from "./Navbar";
import logo from "../../assets/img/ScubaLiving_logo_small.svg";
import styles from "./Header.module.scss";
import SearchBar from "./SearchBar";
import LoginButton from "./LoginButton";

function Header() {
    const [show, setShow] = useState<boolean>(false);

    return (
        <header className={`${styles.flex} ${show ? styles.show : ""}`}>
            <i onClick={() => setShow(!show)} className={`fas fa-bars ${styles.burger}`}></i>
            <div className={styles.logo}>
                <img src={logo} alt="Et billede af Scubalivings logo" />
            </div>
            <Navbar onNavigation={() => setShow(false)} />
            <SearchBar />
            <div className={styles.login}>
                <LoginButton />
            </div>
        </header>
    )
}

export default Header;