import Footer from "./Footer";
import React from "react";
import {shallow} from "enzyme";

describe("Footer", () =>{
    it("should render component without crashing", () =>{
        const footer = shallow(< Footer/>);
        expect(footer.exists()).toEqual(true);
    });

    it("should render the text copyright ", () =>{
        const footer = shallow(< Footer/>);
        expect(footer.find("p")).text().toContain("Copyright");
    });
});