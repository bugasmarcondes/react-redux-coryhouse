import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class CoursesPage extends Component {
    // 1. e 2.
    // constructor(props) {
    //     super(props);

    //     this.state = {
    state = {
        course: {
            title: "",
        },
    };

    // 2. binding in the constructor, melhor do que opção 1
    // this.handleChange = this.handleChange.bind(this);
    //}

    // 1. e 2. handleChange(event) {
    // 3. arrow functions inherit the binding context of their enclosing scope
    handleChange = event => {
        const course = { ...this.state.course, title: event.target.value };
        this.setState({ course });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.actions.createCourse(this.state.course);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Courses</h2>
                <h3>Add Course</h3>
                {/* 1. não fazer esse tipo de bind, pois toda vez que digitamos, uma nova função é criada no change */}
                {/* onChange={this.handleChange.bind(this)} */}
                <input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.course.title}
                />

                <input type="submit" value="Save" />

                {this.props.courses.map(course => (
                    <div key={course.title}>{course.title}</div>
                ))}
            </form>
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
