import styled from "styled-components";

export const Conteiner = styled.h1`
    background-color: ${props => props.theme.COLORS.BG_BUTTON};
    display: inline-block;

    font-size: 2rem;
    font-style: italic;
    font-weight: 600;

    padding: 1rem 2rem;

    border-radius: 1rem;

    >span{
        color: ${props => props.theme.COLORS.HV_BUTTON};
    }
`