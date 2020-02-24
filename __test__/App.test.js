import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Autocomplete from "../app/components/Autocomplete";

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
