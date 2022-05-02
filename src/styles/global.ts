import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font: 400 16px Roboto, sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }

    h1 {
        text-align: center;
    }
    
    a { color: inherit; } 
    
    a:link {
        color: red;
     }
     
    a:hover {
         color: #000000;
    }
     
    a:active {
    color: blue;
    }
`;