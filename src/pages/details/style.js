import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 8rem auto;
    grid-template-areas:
    "nav"
    "main";

    >nav{
        grid-area: nav;
        padding-inline: 6rem;
        display: flex;
        align-items: center;
        
        button{
          border-radius: 50%;
          padding: 1.6rem;
        }
    }

    >main{
        grid-area: main;
        overflow: hidden;
        padding: 0rem 8rem 5rem ;
        margin-top: 1rem;
    }
`
export const DetailsCar = styled.section`
    background-color: ${props => props.theme.COLORS.BACKGROUND_FORM};
    display: flex;
    border-radius: 1rem;
    height: 100%;
`
export const SectionCar = styled.section`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    img{
        max-width: 50rem;
        padding: 3rem;
    }
`
export const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    flex: 1;
    gap: 2rem;
    margin: 3rem;
    padding: 2rem;
    
    >h1{
        font-size: 3rem;
        line-height: 3rem;
    }
    >p{
        text-align: justify;
    }
    >span{
        display: flex;
        align-items: center;

        font-size: 3rem;
        font-weight: 600;
    }
`
export const SectionProfile = styled.section`
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    img{
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        object-fit: cover;
    }
    h2{
        font-size: 2rem;
    }
    h3{
        font-size: 1.6rem;
        font-weight: 400;
    }
`
export const SectionTags = styled.section`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`
export const SectionContact = styled.section`
    border: 1px solid black;
    padding: 1rem;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    a{
        color: #fff;
        padding-left: 1rem;

    }
`

    

