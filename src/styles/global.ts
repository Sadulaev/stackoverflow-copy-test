import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*  {
    box-sizing: border-box;
}

body {
    padding: 0;
    margin: 0;
    background-color: hsl(210deg 8% 85%);
    width: 100vh;
    height: 100vh;
}
`
