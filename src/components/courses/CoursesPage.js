import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
    componentDidMount() {
        this.props.actions.loadCourses().catch(error => {
            alert("Loading courses failed " + error);
        });
    }

    render() {
        return (
            <>
                <h2>Courses</h2>
                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
    return {
        courses: state.courses,
    };
}

// 4. mapDispatchToProps como um objeto
// when declared as an object, each property is automatically bound to dispatch
// const mapDispatchToProps = {
//     createCourse: courseActions.createCourse
// }

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch),
    };
}

// ao omitir mapDispatchToProps, é automaticamente passado dispatch via props para o componente
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
