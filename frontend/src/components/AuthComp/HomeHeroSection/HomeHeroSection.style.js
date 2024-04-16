import styled from 'styled-components'
import backgroundImage from '../../../assets/images/background_image.png'
import {Link} from 'react-router-dom'


export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  background: url(${backgroundImage}), linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
  background-blend-mode: multiply;
  background-size: cover;

  text-align: center;
  letter-spacing: 0.075px;
  color: white;

  padding: 2.5rem;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100%;
`

export const LogoDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  p {
    font-weight: 500;
    font-size: 2rem;
  }
`

export const ConnectMessageP = styled.p`
  font-size: 1.3rem;
  opacity: 0.6;
`

export const StoresWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
`

export const StoreIconButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: none;
  border: 1px solid #fff4;
  border-radius: 999px;
  padding: 0.8em 1.4em;

  cursor: pointer;

  img {
    max-width: 8rem;
    height: 1.6rem;
  }

  &:hover {
    background-color: #fff2;
  }
`

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;

  p {
    font-weight: 400;
    font-size: .8rem;
    margin: 0px;
  }
`

export const SocialLinksWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`

export const SocialLink = styled.img`
  width: 3rem;
  height: 3rem;
  opacity: 0.5;
`