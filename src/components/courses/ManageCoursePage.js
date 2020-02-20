// 1. IMPORT LIBRARIES
import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";

// 2. CLASS COMPONENT
class ManageCoursePage extends Component {
    componentDidMount() {
        const { courses, authors, loadCourses, loadAuthors } = this.props;

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
    }

    render() {
        return (
            <>
                <h2>Manage Course</h2>
            </>
        );
    }
}

// 3. PROPTYPES
ManageCoursePage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    loadCourses: PropTypes.func.isRequired,
    loadAuthors: PropTypes.func.isRequired,
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
};

// 5. CONNECT OUR COMPONENT TO REDUX
export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
