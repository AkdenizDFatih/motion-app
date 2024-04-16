import styled, {createGlobalStyle, css} from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    height: 100%;
    min-height: 100vh;
  }

  main {
    background-color: #F8F8F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${props => props.theme.header_height} 2rem 2rem;
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  input::placeholder, textarea::placeholder {
    color: #333;
  }
`

export const defaultButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;

  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 999px;

  margin: 0 auto;
  padding: 1em 2em;

  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;

  cursor: pointer;

  transition: background-color 200ms linear;

  &:hover {
    background-color: #d2baff;
    border-color: #d2baff
  }
`

export const PrimaryButton = styled.button`
  ${defaultButtonStyles};
  background-image: linear-gradient(132deg, #c468ff 3.32%, #6e91f6 100%);
  color: white;
  border: none;
  transition: background-image 200ms linear;
  padding: 1.5em 2.2em;
  width: 17.5rem;

  &:hover {
    background-image: linear-gradient(-48deg, #c468ff 3.32%, #6e91f6 100%);
  }
`

export const SecondaryButton = styled.button`
  ${defaultButtonStyles}
`

export const CardWithShadowStyles = styled.div`
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: .3rem;
`

export const CheckMark = styled.img`
  width: 5rem;
  aspect-ratio: 1/1;
  margin-bottom: 2rem;
  animation: scaleIn 400ms ease;

  @keyframes scaleIn {
    0% {
      transform: scale(0);
    }
    80% {
      transform: scale(1.3) rotate(-10deg);
    }
    100% {
      transform: scale(1.0) rotate(0);
    }
  }
`

export default GlobalStyle