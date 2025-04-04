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
        padding: 3rem 6rem;
        overflow-y: auto;
      }
`
export const SectionCars = styled.section`
  display: flex;
  justify-content: center;
  
  flex-wrap: wrap;
  gap: 2rem;
`