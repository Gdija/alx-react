import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () =>{
    it("should render without crashing", () =>{
        const app = shallow(< App/>);
        expect(app.exists()).toBe(true);
    });


    it("verify header", () =>{
        const app= shallow(<App/>);
        expect(app.find(".App-header")).exists().toBe(true);

    });

    it("verify body", () =>{
        const app= shallow(<App/>);
        expect(app.find(".App-body")).exists().toBe(true);

    });

    it("verify footer", () =>{
        const app= shallow(<App/>);
        expect(app.find(".App-footer")).exists().toBe(true);

    });

});