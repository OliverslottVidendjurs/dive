import React from "react";
import SectionTitle from "./SectionTitle";
import styles from "./Section.module.scss";
import { Link } from "react-router-dom";

type SectionProps = {
    title: string,
    readMoreText: string,
    readmoreLink: string,
    children?: any
}

function Section({title, readMoreText, readmoreLink, children}: SectionProps) {
    return (
        <section className={styles.section}>
            <SectionTitle text={title} />
            {children}
            <Link className={styles.more} to={readmoreLink}>{readMoreText}</Link>
        </section>
    );
}

export default Section;