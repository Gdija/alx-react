import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe('verify actions', () => {
    test('verify selectCourse action', () =>{
        // const index = 1;
        const expectedAction = { type: SELECT_COURSE, index: 1 };
        const result = selectCourse(1)
        expect(result).toEqual(expectedAction);
    });

    test('verify selectCourse action', () =>{
        // const index = 1;
        const expectedAction = { type: UNSELECT_COURSE, index: 1 };
        const result = unSelectCourse(1)
        expect(result).toEqual(expectedAction);
    });
})