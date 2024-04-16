import {useEffect, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AvatarIcon from '../../assets/svgs/avatar.svg'
import PasswordIcon from '../../assets/svgs/password.svg'
import {loginUser} from '../../store/slices/loggedInUser.js'
import {useDispatch} from 'react-redux'

import {
    AuthForm,
    FormTitle,
    SignInHeader, InputFieldContainer, ErrorMessage
} from './AutenthicationLayout.style.js'
import useApiRequest from '../../hooks/useApiRequest'
import {AuthFormContainer} from './AutenthicationLayout.style.js'
import {PrimaryButton, SecondaryButton} from '../../styles/globalStyles.js'
import CreateAccountProgress from './CreateAccountProgress.jsx'


function SignInSection(){
    const [user, setUser] = useState({email: undefined, password: undefined})
    const navigate = useNavigate()
    const {sendRequest, data, error} = useApiRequest()
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        sendRequest('post', 'auth/token/', user)
    }

    useEffect(() => {
        if(data){
            dispatch(loginUser({user: data.user, accessToken: data.access}))
            localStorage.setItem('user', JSON.stringify(data.user))
            localStorage.setItem('auth-token', data.access)
            navigate('/posts')
        }
    }, [data, dispatch, navigate])

    return (
        <>
            <SignInHeader>
                <p>Don&apos;t have an account?</p>
                <Link to="/signup">
                    <SecondaryButton>sign up</SecondaryButton>
                </Link>
            </SignInHeader>
            <AuthFormContainer>
                <AuthForm onSubmit={handleLogin}>
                    <div className={'input-container'}>
                        <FormTitle>Sign In</FormTitle>
                        <InputFieldContainer>
                            <div className={'input-wrapper'}>
                                <img src={AvatarIcon}></img>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    required
                                    onChange={handleInput}
                                    id="email"
                                />
                            </div>
                            {error?.email && <ErrorMessage>{error.email}</ErrorMessage>}
                        </InputFieldContainer>
                        <InputFieldContainer>
                            <div className={'input-wrapper'}>
                                <img src={PasswordIcon} alt="Password icon"/>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    required
                                    onChange={handleInput}
                                    id="password"
                                />
                            </div>
                            {error?.password && <ErrorMessage>{error.password}</ErrorMessage>}
                        </InputFieldContainer>
                        {error?.detail && <p className={'error-message'}>{error.detail}</p>}
                    </div>
                    <div className={'form-footer'}>
                        <PrimaryButton onClick={handleLogin}>sign in</PrimaryButton>
                        <CreateAccountProgress/>
                    </div>
                </AuthForm>
            </AuthFormContainer>
        </>
    )
}

export default SignInSection
