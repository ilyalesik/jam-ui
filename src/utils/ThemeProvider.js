import React from "react";

export const ThemeContext = React.createContext({

});

export const ThemeProvider = (props) => {
    return <ThemeContext.Provider value={props.options}>
        {props.children}
    </ThemeContext.Provider>
}
