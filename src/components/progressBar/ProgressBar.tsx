import React, { FunctionComponent } from "react";
import { LinearProgress } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiLinearProgress: {
        barColorPrimary: {
                backgroundColor: "#22A162",
                
            }, 
            colorPrimary: {
                backgroundColor: "#b2dfdb"
            }
        },
        
    }
})

export const ProgressBar: FunctionComponent<{}> = () => {
    return (
        <ThemeProvider theme={theme}>
            <LinearProgress/>
        </ThemeProvider>
    );
};


