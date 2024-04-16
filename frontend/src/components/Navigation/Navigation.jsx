import { useState } from 'react'
import {
  Avatar,
  MenuContainer,
  ContainerLeft,
  ContainerRight,
  NotificationButton,
  HeaderContainer,
  LogoWrapper,
  NavbarLink,
} from './Navigation.style.js'
import logo from '../../assets/images/logo.png'
import MenuDot from '../../assets/svgs/menu.svg'
import findFriendLogo from '../../assets/svgs/icon-friends.svg'
import postsLogo from '../../assets/svgs/posts_logo.svg'
import bell from '../../assets/svgs/notification_bell.svg'
import NavigationActionsContainer from './NavigationActionsContainer.jsx'
import FriendsRequestsContainer from './FriendsRequests/FriendsRequestsContainer.jsx'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import avatarImage from '../../assets/svgs/avatar.svg'
import { Link } from 'react-router-dom'
import useAutoFetch from '../../hooks/useAutoFetch'
import { setRequests } from '../../store/slices/friendRequests.js'

const Navigation = () => {
  const loggedInUser = useSelector((store) => store.loggedInUser.user)
  const dispatch = useDispatch()
  const friendRequests = useSelector((store) => store.friendRequests)

  const [showMenu, setShowMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  const { data } = useAutoFetch('get', 'social/friends/requests/')

  const [sentRequests, setSentRequests] = useState([])
  const [receivedRequests, setReceivedRequests] = useState([])
  const requestsCount = sentRequests.length + receivedRequests.length

  useEffect(() => {
    dispatch(setRequests(data?.results))
  }, [data])

  useEffect(() => {
    setSentRequests(
      friendRequests.filter(
        (request) =>
          request.requester.id === loggedInUser.id && request.status === 'P'
      )
    )
    setReceivedRequests(
      friendRequests.filter(
        (request) =>
          request.requester.id !== loggedInUser.id && request.status === 'P'
      )
    )
  }, [friendRequests])

  return (
    <HeaderContainer>
      <ContainerLeft>
        <LogoWrapper to="/posts">
          <img src={logo}></img>
          <p>Motion</p>
        </LogoWrapper>

        <nav>
          <NavbarLink to="/posts">
            <img src={postsLogo}></img>
            <p>Posts</p>
          </NavbarLink>
          <NavbarLink to="/find-friends">
            <img src={findFriendLogo}></img>
            <p>Find Friends</p>
          </NavbarLink>
        </nav>
      </ContainerLeft>

      <ContainerRight>
        <NotificationButton
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <div className={'icon-wrapper'}>
            <img src={bell}></img>
            <p className={'request-count'}>{requestsCount}</p>
          </div>
          {showNotifications && (
            <FriendsRequestsContainer
              setShowNotifications={setShowNotifications}
              sentRequests={sentRequests}
              receivedRequests={receivedRequests}
            />
          )}
        </NotificationButton>
        <Link to={'/profile'}>
          <Avatar src={loggedInUser?.avatar || avatarImage}></Avatar>
        </Link>
        <MenuContainer>
          <img src={MenuDot} onClick={() => setShowMenu(!showMenu)} />
          {showMenu && <NavigationActionsContainer setShowMenu={setShowMenu} />}
        </MenuContainer>
      </ContainerRight>
    </HeaderContainer>
  )
}

export default Navigation
