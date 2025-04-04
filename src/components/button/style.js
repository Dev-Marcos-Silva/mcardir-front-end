import styled from "styled-components";

export const Conteiner = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({theme, $isActive }) => $isActive ? theme.COLORS.HV_BUTTON: theme.COLORS.BG_BUTTON};
    
    padding: 1rem 3.4rem;
    border-radius: 1rem;
    border: none;
    transition: 0.5s;

    &:hover{
        background-color: ${ props => props.theme.COLORS.HV_BUTTON };
    }

   
`