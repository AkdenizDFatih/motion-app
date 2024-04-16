import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {CardWithShadowStyles} from '../../styles/globalStyles.js'


export const FriendsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 2rem;
  justify-items: center;
  width: 100%;
`

export const FriendCardContainer = styled(CardWithShadowStyles)`
  aspect-ratio: 1/1.35;
  padding: 2rem;
`

export const FriendCardHeader = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: inherit;

  &:hover {
    cursor: pointer;
  }
`

export const FriendAvatar = styled.img`
  width: 5.5rem;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  margin-bottom: 1rem;
`

export const FriendName = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
  word-wrap: break-word;
  width: 100%;
`

export const FriendLocation = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 1.2rem;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1.2rem;
  gap: 0.8rem;
  
  > button {
    flex: 1;
  }
`

export const FriendAbout = styled.p`
  font-size: .875rem;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 1.2rem;
`