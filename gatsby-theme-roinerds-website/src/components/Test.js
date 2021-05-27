import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@material-ui/core";

export const Test = ({props}) => {
    return (
        <div className="bg-indigo-600 text-white">
            <Typography variant={"h2"}>
                Test
            </Typography>
        </div>
    );
};

Test.propTypes = {};

export default Test;
