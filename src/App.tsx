import {Button} from "./components/Button";
import {defaultTheme} from "./styles/defaultTheme";
import {ThemeProvider} from "styled-components";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
   <Button  variant="primary"/>
        <Button variant="secondary"/>
        <Button variant="danger"/>
        <Button variant="success"/>
    </ThemeProvider>
  )
}
