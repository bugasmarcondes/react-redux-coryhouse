// 1. IMPORT LIBRARIES
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import CourseForm from "./CourseForm";
import { newCourse } from "../../../tools/mockData";

// 2. FUNCTION COMPONENT
function ManageCoursePage({
    courses,
    authors,
    loadCourses,
    saveCourse,
    loadAuthors,
    ...props
}) {
    const [course, setCourse] = useState({ ...props.course });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (courses.length === 0) {
            loadCourses().catch(error => {
                alert("Loading courses failed " + error);
            });
        }

        if (authors.length === 0) {
            loadAuthors().catch(error => {
                alert("Loading authors failed " + error);
            });
        }
    }, []);

    function handleChange(event) {
        const { name, value } = event.target;

        setCourse(prevCourse => ({
            ...prevCourse,
            [name]: name === "authorId" ? parseInt(value, 10) : value,
        }));
    }

    function handleSave(event) {
        event.preventDefault();
        saveCourse(course);
    }

    return (
        <>
            <CourseForm
                course={course}
                errors={errors}
                authors={authors}
                onChange={handleChange}
                onSave={handleSave}
            />
        </>
    );
}

// 3. PROPTYPES
ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
    saveCourse: PropTypes.func.isRequired,
};

// 4. REDUX MAAPING FUNCIONS
function mapStateToProps(state) {
    return {
        courses: state.authors,
        authors: state.authors,
    };
}

// 4. mapDispatchToProps como um objeto
// when declared as an object, each property is automatically bound to dispatch
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse
// }

// USING THE OBJECT FORM
const mapDispatchToProps = {
    loadCourses: courseActions.loadCourses,
    loadAuthors: authorActions.loadAuthors,
    saveCourse: courseActions.saveCourse,
};

// 5. CONNECT OUR COMPONENT TO REDUX
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
