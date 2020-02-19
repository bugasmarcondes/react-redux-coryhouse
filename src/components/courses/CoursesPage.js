import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";

class CoursesPage extends Component {
    componentDidMount() {
        const { courses, authors, actions } = this.props;

        if (courses.length === 0) {
            actions.loadCourses().catch(error => {
                alert("Loading courses failed " + error);
            });
        }

        if (authors.length === 0) {
            actions.loadAuthors().catch(error => {
                alert("Loading authors failed " + error);
            });
        }
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                <CourseList courses={this.props.courses}></CourseList>
            </>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        courses:
            state.authors.length === 0
                ? []
                : state.courses.map(course => {
                      return {
                          ...course,
                          authorName: state.authors.find(
                              a => a.id === course.authorId
                          ).name,
                      };
                  }),
        authors: state.authors,
    };
}

// 4. mapDispatchToProps como um objeto
// when declared as an object, each property is automatically bound to dispatch
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse
// }

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadCourses: bindActionCreators(
                courseActions.loadCourses,
                dispatch
            ),
            loadAuthors: bindActionCreators(
                authorActions.loadAuthors,
                dispatch
            ),
        },
    };
}

// ao omitir mapDispatchToProps, é automaticamente passado dispatch via props para o componente
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
