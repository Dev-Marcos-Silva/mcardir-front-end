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
        display: flex;
        gap: 2rem;
        grid-area: main;
        overflow-y: hidden;
        padding: 0rem 5rem 2rem;
    }
`
export const SectionProfile = styled.section`
    background-color: ${props => props.theme.COLORS.BACKGROUND_FORM};
    height: max-content;
    display: flex;
    flex: 2;
    flex-direction: column;
    border-radius: 1rem;
`
export const SectionPostes = styled.section`
    background-color: ${props => props.theme.COLORS.BACKGROUND_CARD};
    border-radius: 1rem;
    max-height: 54rem ;

    flex: 3;
    overflow-x: hidden;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 3rem 2rem;
    margin-top: 2rem;
`
export const Imagem = styled.section`
      position: relative;
      display: flex;
      justify-content: center;
      margin-top: 2rem;
    
      >img{
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        object-fit: cover;
      }

      span{
        position: absolute;
        height: 6rem;
        width: 6rem;
        border-radius: 50%;
        bottom: 0;
        right: 16rem;

        div{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: red;
          height: 100%;
          border-radius: 50%;

          input{
            position: absolute;
            height: 8rem;
            width: 8rem;
            padding-top: 8rem;
            border-radius: 50%;
            cursor: pointer;
          }
          svg{
            font-size: 4rem;
          }
        }
       }
`
export const SectionUpdade = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0rem 3rem 3rem;

    >form{
      button{
        width: 100%;
        margin-top: 2rem;
      }
    }
`