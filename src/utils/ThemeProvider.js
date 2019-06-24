// @flow
import React from "react";

type TTheme = {
    primaryColor: string,
}

export const ThemeContext = React.createContext<TTheme>({
    primaryColor: "#4ba82e"
});

export const ThemeProvider = (props: {children: React$Node, options: TTheme}) => {
    return <ThemeContext.Provider value={props.options}>{props.children}</ThemeContext.Provider>;
};
