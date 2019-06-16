import React, {useContext} from "react";
import styled, { css } from "reshadow";
import {ThemeContext} from "../../utils/ThemeProvider";

export const Button = ({ children, styles, ...props }) => {
    const {color = "#4ba82e"} = useContext(ThemeContext);
    return styled`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
    
        width: 225px;
        height: 58px;
        border: none;
    
        border-radius: 2px;
        background-color: ${color};
      }
      span {
        font-family: Helvetica, sans-serif;
        font-size: 20px;
        line-height: 1.4;
        color: #ffffff;
        text-transform: capitalize;
      }
`(
    <button {...props}>
        <span>{children}</span>
    </button>);
};

export default Button;
