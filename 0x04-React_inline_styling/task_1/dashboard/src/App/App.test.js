import React from 'react';
import { shallow, mount } from 'enzyme';
import { jest } from '@jest/globals';
import App from './App';
import { StyleSheetTestUtils } from "aphrodite";


describe('Test App.js', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Renders App without crashing', () => {
    wrapper = shallow(<App />);
    expect(wrapper.exists());
  });

  it('App component contains Notifications component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it('App component contains Header component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  it('App component contains Login component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it('App component contains Footer component', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });

  it('test to check that CourseList is not displayed inside App', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

describe("Testing <App isLoggedIn={true} />", () => {
  const wrapper = shallow(<App isLoggedIn />);
  expect(wrapper.exists());
  expect(wrapper.find('Login')).toHaveLength(0);
  expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  it('logOut', () => {
    const logOut = jest.fn(() => undefined);
    const wrapper = shallow(<App logOut={logOut} />);
    expect(wrapper.exists());
    const alert = jest.spyOn(global, 'alert');
    expect(alert);
    expect(logOut);
    jest.restoreAllMocks();
  });
});


//   it("the Login component is not included", () => {
//     expect(wrapper.find('Login')).toHaveLength(0);
//   });

//   it("the CourseList component is included", () => {
//     expect(wrapper.find('CourseList').exists());
//   });
// });

// describe("Testing <App logOut={function} />", () => {

//   it("verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
//     const wrapper = mount(<App logOut={()=>{console.log("ctrl and h are pressed")}}/>);
//     window.alert = jest.fn();
//     const inst = wrapper.instance();
//     const logout = jest.spyOn(inst, 'logOut');
//     const alert = jest.spyOn(window, 'alert');
//     const event = new KeyboardEvent('keydown', {bubbles:true, ctrlKey: true, key: 'h'});
//     document.dispatchEvent(event);
//     expect(alert).toBeCalledWith("Logging you out");
//     expect(logout).toBeCalled();
//     alert.mockRestore();
//   });
// });
