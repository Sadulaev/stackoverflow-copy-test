import { ITheme } from "../interfaces/styled";

export const baseTheme: ITheme = {
    colors: {
      bg: 'hsl(0,0%,100%)',
      font: 'hsl(210,8%,15%);',
      border: 'hsla(360, 0%, 72%, 0.94)',
      primaryBtn: 'hsl(206,100%,52%)',
      secondaryBtn: 'hsl(205,46%,92%)',
    },
  
    media: {
      max: '1264px',
    },
  
    // in px
    // sizes: {
    //   header: { height: 56 },
    //   container: { width: 1200 },
    //   footer: { height: 128 },
    //   modal: { width: 540 },
    // },
  }