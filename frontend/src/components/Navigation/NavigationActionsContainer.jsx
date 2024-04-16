import profileImage from '../../assets/svgs/icon_profile.svg'
import logoutImage from '../../assets/svgs/icon_logout.svg'
import { ActionsWrapper, ActionContainer } from './Navigation.style.js'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../store/slices/loggedInUser.js'

const NavigationActionsContainer = ({ setShowMenu }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClickLogout = () => {
    localStorage.clear()
    dispatch(logoutUser())
    navigate('/')
  }

  return (
    <ActionsWrapper onMouseLeave={() => setShowMenu(false)}>
      <ActionContainer>
        <NavLink to={'/profile'}>
          <img alt="profileLogo Image" src={profileImage} />
          <p>Profile</p>
        </NavLink>
      </ActionContainer>
      <ActionContainer onClick={handleClickLogout}>
        <div>
          <img alt="Logout Image" src={logoutImage} />
          <p>Logout</p>
        </div>
      </ActionContainer>
    </ActionsWrapper>
  )
}

export default NavigationActionsContainer
