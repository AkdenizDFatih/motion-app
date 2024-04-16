import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: ${(props) => props.theme.header_height};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 2rem;
`

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 7rem;
  height: 100%;

  nav {
    display: flex;
    height: 100%;
    gap: 2rem;
  }
`

export const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  gap: 1rem;

  border-bottom: 2px solid;
  border-color: transparent;

  &.active {
    border-color: #ad73fd;
    color: #ad73fd;
  }

  &:hover:not(.active) {
    border-color: #ccc;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`

export const LogoWrapper = styled(Link)`
  display: flex;
  gap: 1rem;

  img {
    height: 26px;
    width: 26px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
  }

  p {
    font-size: 22px;
  }
`

export const NotificationButton = styled.button`
  background: none;
  border: none;
  height: 100%;
  position: relative;

  .icon-wrapper {
    cursor: pointer;

    > img {
      height: 1.2rem;
      padding-right: 1.5rem;
    }

    .request-count {
      font-size: 11px;
      font-weight: bold;
      position: absolute;
      top: -0.8rem;
      right: 0;

      background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
      box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1.3rem;
      width: 1.3rem;
      color: white;
    }
  }
`

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`

export const MenuContainer = styled.div`
  position: relative;

  > img {
    padding: 0.4rem;
    cursor: pointer;
  }
`

export const ActionsWrapper = styled.ul`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  width: 11rem;
  background-color: white;
  border-radius: 0.2rem;
  overflow: hidden;
`

export const ActionContainer = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 0.875rem;

  &:first-child {
    border-bottom: 1px solid #d8d3d3;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  > a,
  > div {
    width: 100%;
    padding: 0.8rem 1.2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      opacity: 0.35;
    }

    &.active {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`

export const NotificationsContainer = styled.div`
  position: absolute;
  right: 0;
  top: calc(100% + 1rem);
  background: white;
  padding: 1.8rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 0.5rem;
`

export const RequestTypeContainer = styled.div`
  > p {
    font-size: 1.2rem;
    text-align: left;
    margin-bottom: 2rem;
  }

  .requests-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export const RequestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 22rem;

  a {
    display: flex;
    gap: 1rem;

    &:hover {
      text-decoration: underline;

      img {
        transform: scale(1.1);
      }
    }
  }

  .user-name-location {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .user-location {
      opacity: 0.5;
    }
  }
`

export const RequestStatusIcon = styled.img`
  height: 2.5rem;
  aspect-ratio: 1/1;

  cursor: ${(props) => (props.noClick ? 'default' : 'pointer')};
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`
