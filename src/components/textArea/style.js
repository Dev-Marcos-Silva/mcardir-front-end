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

    >textarea{
        background-color: #353B3B;
        max-width: 100%;

        color: white;
        font-size: 2rem;
        border-radius: 1rem;
        padding-inline: 2rem;
        padding-block: 1rem;
    }
`
