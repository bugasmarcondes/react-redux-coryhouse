import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";

describe("createCourseSuccess", () => {
    it("should create a UPDATE_COURSE_SUCCESS action", () => {
        //arrange
        const course = courses[0];
        const expectedAction = {
            type: types.UPDATE_COURSE_SUCCESS,
            course,
        };

        //act
        const action = courseActions.createCourseSuccess(course);

        //assert
        expect(action).toEqual(expectedAction);
    });
});
