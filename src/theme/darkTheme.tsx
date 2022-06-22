import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
});

export function DarkTheme(props: PropsWithChildren) {
    return <ThemeProvider theme={darkTheme}>
        <CssBaseline>
            {props.children}
        </CssBaseline>
    </ThemeProvider>
}