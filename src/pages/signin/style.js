import styled from "styled-components";

import imagemBackground from "../../assets/img/bg-porsche.jpg";

export const Conteiner = styled.div`
    background: url(${imagemBackground}) no-repeat center center;
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 8rem auto;
    grid-template-areas: 
    "nav"
    "main";

    >nav{
        grid-area: nav;
        padding-inline: 6rem;
        display: flex;
        align-items: center;

        button{
          border-radius: 50%;
          padding: 1.6rem;
        }
    }
    >main{
        grid-area: main;
        overflow-y: hidden;
        padding-top: 1rem;
        padding-bottom: 6rem;

    }
`
export const Forms = styled.form`
    background-color: ${props => props.theme.COLORS.BACKGROUND_FORM };
    padding: 2rem 4rem 3rem;
    border-radius: 2rem;
    max-width: 50rem;
    max-height: 100%;
    margin: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    >section{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        h1{
            font-size: 3rem;
        }
        p{
            font-size: 1.6rem;
            filter: brightness(0.8);
        }
    }
    >section + section{
        width: 100%;
    }

    >button{
        border-radius: 1rem;
        width: 100%;
        padding: 1.6rem;
    }

`
