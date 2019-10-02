import React from "react";
import styles from "./Courses.module.scss";
import Section from "./Section";
import CoursesList from "../common/CoursesList";

function Courses() {
    return (
        <Section title="PADI - DYKKERCERTIFIKAT" readMoreText="SE ALLE KURSER OG CERTIFIKATER HER!" readmoreLink="/courses">
            <CoursesList/>
        </Section>
    )
}

export default Courses;