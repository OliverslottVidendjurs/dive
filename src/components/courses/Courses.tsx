import React from "react";
import CoursesList from "../common/CoursesList";
import SubPage from "../common/SubPage";

function Courses(){
    return (
        <SubPage title="Kurser">
            <CoursesList/>
        </SubPage>
    );
}

export default Courses;