import styled from 'styled-components'

export const OverlayContainer = styled.div`
  .overlay__background {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 9;
  }

  .overlay__container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 10;
    width: fit-content;
    height: fit-content;
  }

  .overlay__controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .overlay__close:after {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    box-sizing: border-box;
    height: 2rem;
    width: 2rem;
    top: -28px;
    right: -28px;
    content: "\\00d7";
    color: white;
  }

  .overlay__close {
    border: none;
    background-color: transparent;
    font-size: 36px;
    cursor: pointer;
  }
`