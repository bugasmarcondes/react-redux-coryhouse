import React, { Component } from "react";

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

    render() {
        return (
            <form>
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
            </form>
        );
    }
}

export default CoursesPage;
