// @flow
import React, { useContext } from "react";
import styled, { css, style } from "reshadow";
import { ThemeContext } from "../../theming/ThemeProvider";

export const Button = ({ children, styles }: any) => {
    const theme = useContext(ThemeContext);
    return styled(styles)`
        button {
            display: flex;
            align-items: center;
            justify-content: center;

            border: none;
            padding: 1em;

            border-radius: ${theme.borderRadius};
            background-color: ${theme.primaryColor};
        }
        span {
            font-family: ${theme.fontFamily};
            font-size: 1em;
            color: #ffffff;
            text-transform: capitalize;
        }
    `(
            <button>
                <span>{children}</span>
            </button>
    );
};

export default Button;
