import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import Counter from "./components/counter_component/Counter";

describe("<App/>", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  it("render the title of counter", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find("h1").text()).toContain("This is counter App");
  });

  it("should render a button with `increment` text", () => {
    expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  it("render the initial value if state in a div", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  it("should increase the counter value on button click event", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  it("should decrease the counter value on decrement button click event", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  it("should not decrease the counter value on button click event if counter value is zero `0`", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");

    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });
});
