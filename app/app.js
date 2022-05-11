import React from 'react';
import ReactDOM from 'react-dom';
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./assets/sass/main.sass";
import Main from "./components/Main.js";

import { AppProvider } from "./context/AppContext"


export default function App() {
    return (
        <AppProvider>
            <Main />
        </AppProvider>

    )
}

ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
    module.hot.accept()
}