import React from "react";
import "./App.css";
import { AppProvider } from "./comps/AppProvider";
import Content from "./comps/Content";
import { BrowserRouter } from "react-router-dom";

import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#4CBB85",
        },
    },
    status: {
        danger: "orange",
    },
});

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AppProvider bypass>
                    <ThemeProvider theme={theme}>
                        <Content />
                    </ThemeProvider>
                </AppProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
