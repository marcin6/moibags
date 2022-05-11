import React, { useState } from 'react'

export const AppContext = React.createContext();

export function AppProvider(props) {
    const [blackNav, setBlackNav] = useState(false);

    if (blackNav === true) {
        const app = document.getElementById("app");
        app.classList.remove("app");
    }

    return (
        <AppContext.Provider
        value={{ blackNav, setBlackNav }}>
            {props.children}
        </AppContext.Provider>
    )
}