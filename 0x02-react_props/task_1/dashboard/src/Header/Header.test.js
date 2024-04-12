import React from "react";
import Header from "./Header";
import {shallow} from "enzyme";

describe("Header", () =>{
    it("should render component without crashing", () =>{
        const header = shallow(< Header/>);
        expect(header.exists()).toEqual(true);
    });

    it("verify img and h1", () =>{
        const header = shallow(< Header/>);
        expect(header.find("img")).toHavelength(1);
        expect(header.find("h1")).text().toBe("School dashboard");
    });
});
