"use client"
import {createTheme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        black: Palette['primary'];
        textColor: Palette['primary'];
    }
    interface PaletteOptions {
        black: PaletteOptions['primary'];
        textColor: PaletteOptions['primary'];
    }

}


export const darkThemeCustom: any = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#e91e63',
        },
        black: {
            main: '#000000',
        },
        background:{
            paper:"#0D0D0D",
            default:"#0D0D0D"
        },
        textColor:{
            main:"#123123"
        }
    }
});

