import {defaultTheme} from "./styles/defaultTheme"
import {ThemeProvider} from "styled-components"
import {GlobalStyle} from './styles/global'
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";

export function App() {

    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    )
}
