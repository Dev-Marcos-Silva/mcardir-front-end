import styled from "styled-components";

export const Conteiner = styled.div`
    background-color: ${props => props.theme.COLORS.BACKGROUND_FORM};
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    border-radius: 1rem;
    width: 100%;
    min-height: auto;
    padding-block: 3rem;
    padding-inline: 2rem;

    >section{
        display: flex;
        gap: 3rem;
        img{
            height: 8rem;
        }
    }
`