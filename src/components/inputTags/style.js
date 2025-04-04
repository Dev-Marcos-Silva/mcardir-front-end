import styled from "styled-components";

export const Conteiner = styled.section`
    display: flex;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
    input{
        background-color: ${ props => props.theme.COLORS.BACKGROUND_CARD };
        border: none;
        padding: 1rem 2rem;
        border-radius: 1rem;
    }

    button{
        background-color: ${ props => props.theme.COLORS.HV_BUTTON };
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 1.5rem;
        border-radius: 50%;
    }
`