import React from "react";
import Login from  "./Login";
import {shallow} from "enzyme";

describe("Login", () =>{
    it("should render component without crashing", () =>{
        const login = shallow(< Login/>);
        expect(login.exists()).toEqual(true);
    });

    it("verify input and label", () =>{
        const login = shallow(< Login/>);
        expect(login.find("input")).toHaveLength(2);
        expect(login.find("label")).toHaveLength(2);

    });
});