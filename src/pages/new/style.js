import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

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
        padding-bottom: 2rem;
    }
`
export const Forms = styled.form`
    background-color: ${props => props.theme.COLORS.BACKGROUND_FORM};
    width: 90%;
    height: 100%;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;

    margin: auto;
    padding: 2rem;

    border-radius: 2rem;
    overflow: hidden;

    >div{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 2rem;
    }
    >div + section{
        display: flex;
        flex: 1;
        flex-direction: column;
        overflow-y: auto;

        gap: 2rem;
        padding: 1rem;
        height: 54rem;
    }

    >button{
        border-radius: 1rem;
        width: 100%;
        padding: 1.6rem;
        margin-top: 3rem;
    }
    >select{
        background-color:  #f8fdff;
        width: 20rem;
        padding-block: 0.5rem ;
        padding-inline: 1.6rem ;
        margin-block: 1rem;

        outline: none;
        border-radius: 1rem;


        font-size: 2rem;
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
export const SectionCar = styled.section`
    display: grid;
    grid-template-columns: 20rem auto;
    gap: 2rem;
`
export const SectionImagem = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;


    >img{
        width: 30rem;
        height: 15rem;
        object-fit: cover;
    }

    span{
        height: 10rem;
        width: 10rem;
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
            height: 10rem;
            width: 10rem;
            padding-top: 10rem;
            border-radius: 50%;
            cursor: pointer;
          }
          svg{
            font-size: 4rem;
          }
        }
       }
`
export const SectionSelect = styled.section`
    display: flex;
    justify-content: space-around;

    >span{
        display: flex ;
        align-items: end;
        gap: 1rem;

        label{
            font-size: 2rem;
            cursor: pointer;
        }
    }
`
export const SectionTags = styled.section`
   display: flex;
   flex-direction: column;

    >section + section{
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
        flex-wrap: wrap;
    }
  
`
export const Phone = styled.section`
    display: grid;
    grid-template-columns: 10rem auto;
    gap: 2rem;
`