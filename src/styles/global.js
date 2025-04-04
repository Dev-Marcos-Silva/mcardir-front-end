import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 62.5%;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html{
        scroll-behavior: smooth;
    }

    body{
       background-color: ${props => props.theme.COLORS.BACKGROUND} ;
    }

    body, input, button, textarea{
        font-family: "Poppins", serif;
        font-size: 1.6rem;
        outline: none;
        color: ${props => props.theme.COLORS.FONT};
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    } 

    button:hover, a:hover{
        filter: brightness(0.9);
    }
`