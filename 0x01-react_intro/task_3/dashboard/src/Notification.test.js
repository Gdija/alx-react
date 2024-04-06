import React from "react";
import Notification from "./Notification";
import { shallow } from "enzyme";

describe("Notification", () =>{
    it("should render component without crashing", () =>{
        const notif = shallow(< Notification/>);
        expect(notif.exists()).toBe(true);
    });


    it("verify unordered list", () =>{
        const notif= shallow(< Notification/>);
        expect(notif.find("ul")).toBeDefined();

    });

    it("verify list items", () =>{
        const notif= shallow(<Notification/>);
        expect(notif.find("li")).toHaveLength(3);

    });

    it("verify if notificatin renders text", () =>{
        const notif= shallow(<Notification/>);
        expect(app.find("p")).text().toBe("Here is the list of notifications");

    });

});