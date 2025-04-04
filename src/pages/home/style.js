import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows: 8rem auto;
    grid-template-areas: 
    "heade"
    "main";
    
    >main{
        grid-area: main;
        padding: 6rem;
        overflow-y: auto;
    }
`
export const Welcome = styled.section`
    display: flex;
    gap: 8rem;
    padding-bottom: 8rem;
    border-bottom: 1px solid ${props => props.theme.COLORS.BACKGROUND_CARD} ;
`
export const SectionText = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1 ;
    gap: 2.4rem;
    padding-bottom: 8rem ;

    >h1{
        font-size:  5rem;
        font-weight: bold;
        font-style: italic;
        span{
            color: ${props => props.theme.COLORS.HV_BUTTON};
        }
    }

    >h2{
        font-size: 1.8rem;
    }

    >.paragraph{
       color: #ffffff77;
       text-align: justify;
    }

    >a{
        position: absolute;
        bottom: 0;
    }
`
export const SectionImagem = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1 ;
    
    >#nissan{
        position: absolute;
        right: 0;
        filter: drop-shadow(10rem 0rem 5rem #c70b0080);
    }
    >#mitsubishi{
        width: 44rem;
        padding-top: 4rem ;
    }
    >#backgraund{
        position: absolute;
        z-index: -1;
        height: 56rem;
        width: 66rem;
        left: -8.4rem;
    }
`
export const About = styled.section`
    display: flex;
    gap: 8rem;
    margin-top: 10rem;
    padding-bottom: 10rem;
    border-bottom: 1px solid ${props => props.theme.COLORS.BACKGROUND_CARD} ;
`
export const SectionCard = styled.aside`
    display: flex;
    position: absolute;
    bottom: 5rem;
    gap: 2rem;
`
export const Category = styled.section`
    margin-top: 8rem;
    >h1{
        display: inline-block;
        background: linear-gradient(90deg, ${props => props.theme.COLORS.HV_BUTTON} 0%, #000000 );
        padding-inline: 5rem;
        padding-block: 1rem;
        border-radius: 1rem; 
    }
`
export const Option = styled.section`
    display: flex;
    justify-content: center;
    gap: 2.8rem;
    margin-top: 6rem;
`