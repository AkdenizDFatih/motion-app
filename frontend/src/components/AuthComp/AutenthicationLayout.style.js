import styled from 'styled-components'


export const SignInHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 2rem;
  font-size: 0.8rem;
`

export const AuthFormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthForm = styled.form`
  width: 100%;
  height: 100%;
  max-width: ${props => props.cols > 1 ? '40rem' : '20rem'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input-container {
    flex: 1;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-template-columns: 1fr;
    gap: 2rem;
    @media (${props => props.theme.breakPoints.md}) {
      grid-template-columns: repeat(${props => props.cols ? props.cols : 1}, 1fr);
    }
  }
`

export const FormTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1em;
  grid-column: 1/-1;
`

export const InputFieldContainer = styled.div`
  grid-column: 1 / ${props => props.span ? -1 : 'unset'};
  width: 100%;

  label {
    text-transform: capitalize;
    color: ${props => props.theme.colors.lightGray};
  }

  .input-wrapper {
    position: relative;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 1.5rem;


    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    input {
      border: none;
      flex: 1 1 24rem;
      padding: 1rem 0.25rem;
      font: inherit;
    }
  }
`

export const ConfirmationText = styled.p`
  text-align: center;
  line-height: 1.6;
  margin-bottom: 2rem;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 0.5rem;
`