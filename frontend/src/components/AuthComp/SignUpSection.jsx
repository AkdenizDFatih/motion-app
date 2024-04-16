import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LetterIcon from '../../assets/svgs/letter.svg'
import {
  AuthForm,
  FormTitle,
  SignInHeader,
  ErrorMessage,
  InputFieldContainer,
} from './AutenthicationLayout.style.js'
import { AuthFormContainer } from './AutenthicationLayout.style'
import { PrimaryButton, SecondaryButton } from '../../styles/globalStyles'
import useApiRequest from '../../hooks/useApiRequest.js'
import CreateAccountProgress from './CreateAccountProgress.jsx'

function SignUpSection() {
  const [userEmail, setEmail] = useState('')
  const navigate = useNavigate()
  const { sendRequest, error, data } = useApiRequest()

  const handleSignUpClick = async (e) => {
    e.preventDefault()
    sendRequest('post', 'auth/registration/', { email: userEmail })
  }

  if (data === 'success') {
    localStorage.setItem('registered_email', userEmail)
    navigate('/congratulations')
  }

  return (
    <>
      <SignInHeader>
        <p>Already have an account?</p>
        <Link to="/">
          <SecondaryButton>sign in</SecondaryButton>
        </Link>
      </SignInHeader>
      <AuthFormContainer>
        <AuthForm>
          <div className={'input-container'}>
            <FormTitle>Sign Up</FormTitle>
            <InputFieldContainer>
              <div className={'input-wrapper'}>
                <img src={LetterIcon}></img>
                <input
                  placeholder="Email"
                  type="email"
                  value={userEmail}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {error?.email && <ErrorMessage>{error.email}</ErrorMessage>}
            </InputFieldContainer>
            {error?.detail && <ErrorMessage>{error.detail}</ErrorMessage>}
          </div>
          <div>
            <PrimaryButton onClick={handleSignUpClick}>SIGN UP</PrimaryButton>
            <CreateAccountProgress step={1} />
          </div>
        </AuthForm>
      </AuthFormContainer>
    </>
  )
}

export default SignUpSection
