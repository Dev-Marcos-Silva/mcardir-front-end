import styled from "styled-components";

export const Conteiner = styled.div`
    background-color: ${props => props.theme.COLORS.BACKGROUND_CARD};
    width: 24rem;
    height: 30rem;
    overflow: hidden;

    filter: brightness(0.5);
    border-radius: 1rem;
    transition: 0.4s;


    >img{
        width: 100%; 
        height: 15.2rem;
        padding: 1rem;
        border-radius: 2rem;
        object-fit: cover;
    }
    >section{
        display: flex;
        flex-direction: column;
        gap: rem;
        border-bottom: 1px solid black;
        padding: 0 2rem 1rem;
        margin-bottom: 1rem;
    }
    >span{
        display: flex;
        justify-content: space-between;
        padding-inline: 2rem;

        a{
            color: ${props => props.theme.COLORS.LINK};
        }
    }

    &:hover{
        transform: scale(1.06);
        filter: brightness(1);
    }
`