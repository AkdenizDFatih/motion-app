import styled from 'styled-components'
import {CardWithShadowStyles, defaultButtonStyles} from '../../../styles/globalStyles.js'


export const ProfileBackground = styled.img`
  position: absolute;
  top: ${props => props.theme.header_height};
  left: 50%;

  width: calc(100% - 2rem);
  max-width: 90rem;
  min-height: 12rem;

  transform: translateX(-50%);
  object-fit: cover;
  border-radius: 0 0 1rem 1rem;
`


export const ProfileHeaderContainer = styled(CardWithShadowStyles)`
  position: relative;
  max-width: ${props => props.theme.max_content_width};
  min-height: 16rem;

  margin-top: 10rem;
  display: flex;
  z-index: 2;
`

export const ProfileHeaderLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: 25%;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;

  h2 {
    font-weight: 400;
    font-size: 1.4rem;
    text-align: center;
    margin: 0;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }

  button {
    width: 10rem;
  }
`

export const ProfileHeaderRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`

export const AvatarImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.9;
`

export const EditAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  input[type=file], button {
    ${defaultButtonStyles}
  }

  button {
    width: 12rem;
    max-width: 100%;
    margin-top: 1rem;
  }
`

export const SavedChangesMessage = styled(CardWithShadowStyles)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 18rem;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`
