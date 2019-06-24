// @flow
import React from "react";
import {defaultTheme} from "./defaultTheme";

type TTheme = {
    primaryColor: string,
    fontFamily: string,
    borderRadius: string
}

export const ThemeContext = React.createContext<TTheme>(defaultTheme);

export const ThemeProvider = (props: {children: React$Node, options: TTheme}) => {
    return <ThemeContext.Provider value={props.options}>{props.children}</ThemeContext.Provider>;
};
