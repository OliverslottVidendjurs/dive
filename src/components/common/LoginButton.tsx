import React from "react";
import styles from "./LoginButton.module.scss";
import lock from "../../assets/img/lock-icon-300x300.png";
import {Link} from "react-router-dom";

function LoginButton() {
    return (
        <Link to="/" className={styles.button}>
            <div>
                <div className={styles.imgWrapper}>
                    <img src={lock} alt="" />
                </div>
                <div className={styles.grey}>
                    <span>LOGIN</span>
                </div>
            </div>
        </Link>
    );
}

export default LoginButton;