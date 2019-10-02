import React from "react";
import styles from "./Login.module.scss";

function Login() {
    return (
        <div className={`${styles.login}`}>
            <div className={styles.left}>
                <h2>Login</h2>
                <div className={styles.formWrapper}>
                    <form action="todo">
                        <div className={styles.group}>
                            <label htmlFor="username">Brugernavn</label>
                            <input autoFocus type="text" name="username" id="username" required />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
            <div className={styles.right}>
                <h2>Opret Ny Bruger</h2>
                <div className={styles.formWrapper}>
                    <form action="todo">
                        <div className={styles.group}>
                            <label htmlFor="username">Brugernavn</label>
                            <input type="text" name="username" id="username" required />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        <div className={styles.group}>
                            <label htmlFor="passwordgentag">Gentag Password</label>
                            <input autoComplete="off" type="password" name="passwordgentag" id="passwordgentag" required />
                        </div>
                        <button type="submit">Opret</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;