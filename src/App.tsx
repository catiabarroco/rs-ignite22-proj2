import {defaultTheme} from "./styles/defaultTheme"
import {ThemeProvider} from "styled-components"
import {GlobalStyle} from './styles/global'
import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router";
import { CyclesContextProvider } from './contexts/CyclesContext'

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <BrowserRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
            <GlobalStyle/>
        </ThemeProvider>
    )
}
