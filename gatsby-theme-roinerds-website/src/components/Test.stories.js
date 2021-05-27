import React from "react";
import { Test } from "./Test";

export default {
    title: "test",
    component: Test,
};

export const test = () => <Test/>;

// create a template of how args map to rendering
// const Template = (args) => <Test {...args} />;

// export const Example = Template.bind({});
// Example.args = {};
