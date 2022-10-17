import styled from "styled-components";


export const MainStyled = styled.div`
  height: 100vh;
  width: 100%;
  background: red;
  div {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    /* padding: 18rem auto; */
  }
  img {
    margin: 3rem auto;
    width: 8.075rem;
    height: 5.063rem;
    object-fit: contain;
    animation: move 3s ease-in-out;
  }
  @keyframes move {
    0% {
      transform: scale(0.2) rotate(180deg);
    }
    100% {
      transform: scale(1) rotate(720deg);
    }
  }
`