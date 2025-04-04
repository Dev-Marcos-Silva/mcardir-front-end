import styled from "styled-components";

export const Conteiner = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    >label{
        font-size: 2rem;
        font-weight: 600 ;
    }

    >input{
        background-color: #353B3B;
        border: none;
        color: white;
        border-radius: 1rem;
        padding-inline: 2rem;
        padding-block: 1rem;

        font-size: 2rem;
    }

    >input[type="radio"]{ 
        accent-color: ${ props => props.theme.COLORS.HV_BUTTON }; 
        text-decoration: none;
        border: 0px;
        width: 25px;
        height: 30px;
    }

    >input[type=number]::-webkit-inner-spin-button{
        appearance: none; 
    }
`