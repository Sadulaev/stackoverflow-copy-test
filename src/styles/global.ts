import { createGlobalStyle } from 'styled-components';
import { baseTheme } from './theme';

export default createGlobalStyle`
*  {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    color: ${baseTheme.colors.font}
    font-family: Calibri;
}
`
