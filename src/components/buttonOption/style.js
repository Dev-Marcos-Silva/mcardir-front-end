import styled from "styled-components";

export const Conteiner = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: end;

    background-image: ${(props) => `url(${props.$background})`};
    background-size: cover;
    filter: brightness(0.5);
    
    width: 24rem;
    height: 30rem;

    padding: 3rem;

    border: none;
    border-radius: 1rem;

    transition: 0.5s;

    >p{
        font-size: 2.4rem;
        font-weight: 600;
    }

    &:hover{
       transform: scale(1.1);
    }
`