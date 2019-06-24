// @flow
import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";
import { ThemeProvider } from "../../utils/ThemeProvider";
import styled, { css, style } from "reshadow";

storiesOf("Button", module)
    .add("Button", () => <Button>Push Me</Button>)
    .add("Button styled", () => {
        const StyledButton = ({ ...props }) =>
            styled`
  button {
    width: 400px;
  }
`(<Button {...props} {...styled} />);
        return <StyledButton>Push Me</StyledButton>;
    });

storiesOf("Button", module)
    .addDecorator(story => <ThemeProvider options={{ primaryColor: "#ff0000" }}>{story()}</ThemeProvider>)
    .add("Button themed", () => <Button>Push Me</Button>);
