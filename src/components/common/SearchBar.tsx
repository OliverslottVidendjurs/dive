import React from "react";
import styles from "./SearchBar.module.scss";

function SearchBar(){
    return (
        <form className={styles.form}>
            <input aria-label="søg-boks" type="search" name="search" id="search"/>
            <button type="submit">SØG</button>
        </form>
    )
}

export default SearchBar;