import {Link} from 'react-router-dom'
import CheckMarkIcon from '../../assets/svgs/checkmark_new.svg'
import {AuthForm, AuthFormContainer, ConfirmationText, FormTitle} from './AutenthicationLayout.style.js'
import {CheckMark, PrimaryButton} from '../../styles/globalStyles'
import CreateAccountProgress from './CreateAccountProgress.jsx'


function CongratsSection(){
    const userEmail = localStorage.getItem('registered_email')

    return (
        <>
            <AuthFormContainer>
                <AuthForm>
                    <div className={'input-container'}>
                        <FormTitle>Congratulations!</FormTitle>
                        <CheckMark src={CheckMarkIcon} alt="Check mark"/>
                        <ConfirmationText>We’ve sent a confirmation code to your email <br/>
                            {userEmail}
                        </ConfirmationText>
                    </div>
                    <div>
                        <Link to="/verification">
                            <PrimaryButton>continue</PrimaryButton>
                        </Link>
                        <CreateAccountProgress step={2}/>
                    </div>
                </AuthForm>
            </AuthFormContainer>
        </>
    )
}

export default CongratsSection
