import React from "react";

export const ThemeContext = React.createContext({
    color: "#4ba82e"
});

export const ThemeProvider = (props) => {
    return <ThemeContext.Provider value={props.options}>
        {props.children}
    </ThemeContext.Provider>
}
