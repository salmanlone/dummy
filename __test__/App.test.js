import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import App from "../pages/App.js";
import Autocomplete from "../app/components/Autocomplete";

describe("With Enzyme", () => {
  it('App shows "Hello, Sunshine!"', () => {
    const app = shallow(<App />);

    expect(app.find("div").text()).toEqual("Hello, Sunshine!");
  });
});

describe("Autocomplete component", () => {
  it("verify the placeholder text", () => {
    const autocomplete = shallow(<Autocomplete placeholder="test" />);
    expect(autocomplete.find("input").props().placeholder).toEqual("test");
  });
  it("verify the type", () => {
    const autocomplete = shallow(<Autocomplete />);
    expect(autocomplete.find("input").type()).toEqual("input");
  });
});

describe("With Snapshot Testing", () => {
  it('App shows "Hello, Sunshine!"', () => {
    const component = renderer.create(<App />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
