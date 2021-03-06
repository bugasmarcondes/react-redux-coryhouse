import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCourseSuccess(courses) {
    return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    return { type: types.UPDATE_COURSE_SUCCESS, course };
}

export function createCourseSuccess(course) {
    return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function deleteCourseOptmistic(course) {
    return { type: types.DELETE_COURSE_OPTIMISTIC, course };
}

export function loadCourses() {
    // our first thunk
    // redux thunk injects dispatch automatically
    return function(dispatch) {
        dispatch(beginApiCall());

        return courseApi
            .getCourses()
            .then(courses => {
                dispatch(loadCourseSuccess(courses));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function saveCourse(course) {
    return function(dispatch, getstate) {
        dispatch(beginApiCall());

        return courseApi
            .saveCourse(course)
            .then(savedCourse => {
                savedCourse.id
                    ? dispatch(updateCourseSuccess(savedCourse))
                    : dispatch(createCourseSuccess(savedCourse));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    };
}

export function deleteCourse(course) {
    return function(dispatch) {
        dispatch(deleteCourseOptmistic(course));
        return courseApi.deleteCourse(course.id);
    };
}
