import styled, {css} from 'styled-components'
import {defaultButtonStyles, PrimaryButton} from '../../styles/globalStyles'


export const FollowOrRequestButton = styled.button`
  ${defaultButtonStyles};
  font-size: 0.625rem;

  
  ${props => props.follow && css`
    background: linear-gradient(132.96deg, #C468FF 3.32%, #6E91F6 100%);
    border-color: transparent;
    color: white;
  `}
`

export const TickerImage = styled.img`
  height: 100%;
  width: 1.4em;
  opacity: .4;
  margin-right: 0.5em;
`
