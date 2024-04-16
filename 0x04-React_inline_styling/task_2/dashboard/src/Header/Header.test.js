import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from "aphrodite";



describe('Testing <Header /> Component', () => {
  
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  
  it("Renders with out crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeDefined();
  });

  it("Render an h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1')).toBeDefined();
  });

  it("Render an img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img')).toBeDefined();
  });
});
