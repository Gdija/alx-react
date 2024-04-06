import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe('getFullYear', () =>{
    test("returns the current year", () => {
        const currentYear = new Date().getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
})

describe('getFooterCopy', () =>{
    test("correct footer copy", () => {
        expect(getFooterCopy(true)).toBe("Holbertoon School");
        expect(getFooterCopy(false)).tobe("Holbertoon School main dashboard ")
    });
})

describe('getLatestNotification', () =>{
    test("returns string", () =>{
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
    })

})