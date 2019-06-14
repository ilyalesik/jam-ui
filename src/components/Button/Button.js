import React from "react";
import styled, { css } from "reshadow";

const baseStyles = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 225px;
    height: 58px;
    border: none;

    border-radius: 2px;
    background-color: #4ba82e;
  }
  span {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1.4;
    color: #ffffff;
    text-transform: capitalize;
  }
`

export {baseStyles as styles}

export const Button = ({ children, styles = baseStyles, ...props }) => {
    return styled(styles)(
        <button {...props}>
<span>{children}</span>
    </button>
);
};

export default Button;
