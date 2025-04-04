import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid ${props => props.theme.COLORS.HV_BUTTON};
    border-radius: 1rem;

    width:  18rem;
    height: 16rem;

    transform:  skew(-20deg);
    padding: 1rem;

    >p{
       text-align: center;
    }
    
` 