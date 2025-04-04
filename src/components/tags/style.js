import styled from "styled-components";

export const Conteiner = styled.span`
    background-color: ${props => props.theme.COLORS.BACKGROUND_CARD};
    max-width: max-content;

    display: flex;
    padding-inline: 2.4rem;
    padding-block: 1rem;
    border-radius: 1rem;

    font-size: 2rem;

    >button{
        padding-top: 0.6rem;
        margin-left: 0.5rem;
        background-color: transparent;
        border: none;
        color: red;
    }

`