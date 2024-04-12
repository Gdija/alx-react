import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import { shallow } from "enzyme";

describe("App", () =>{
    it("should render without crashing", () =>{
        const app = shallow(< App/>);
        expect(app.exists()).toBe(true);
    });


    it("should render Notification component", () =>{
        const app= shallow(<App/>);
       expect(app.find("Notifications")).toHaveLength(1);

    });

    it("should render Header component", () =>{
        const app= shallow(<App/>);
       expect(app.find("Header")).toHaveLength(1);

    });

    it("should render Login component", () =>{
        const app= shallow(<App/>);
       expect(app.find("Login")).toHaveLength(1);

    });
    it("should render Footer component", () =>{
        const app= shallow(<App/>);
       expect(app.find("Footer")).toHaveLength(1);

    });

});