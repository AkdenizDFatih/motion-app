import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { CardWithShadowStyles } from '../../../styles/globalStyles.js'

export const PostContainer = styled(CardWithShadowStyles)`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;
  gap: 1.25rem;
  font-size: 0.875rem;
  height: unset;
  max-width: 58rem;
`

export const SharedPostContainer = styled(PostContainer)`
  padding: 0 0 0 1rem;
  box-shadow: none;
  border-radius: 0;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrayBorder};
  grid-column: 1/-1;
`

export const Avatar = styled.img`
  width: 3rem;
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;

  &.default {
    filter: saturate(0) brightness(1.3);
  }
`

export const PostHeaderWrapper = styled.div`
  display: flex;
`

export const ProfileLinkWrapper = styled(Link)`
  width: 100%;
  display: flex;
  gap: 1rem;
`

export const AuthorInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  .date {
    opacity: 50%;
  }
`

export const EditButton = styled.button`
  background: none;
  border: none;
  padding-left: 1rem;
`

export const PostText = styled.p`
  overflow: hidden;
  font-size: 1rem;
`

export const PostImageMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const PostImageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem;
`

export const ModalLeftSideContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 68%;
  height: 100%;
`
export const ModalPostImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`
export const ModalButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
`

export const ModalButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  transition: background 0.3s;
  opacity: 30%;

  img {
    width: 30px;
    height: 30px;
  }

  &:hover {
    opacity: 50%;
  }
`

export const PostImage = styled.img`
  border-radius: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;

  &:hover {
    transform: none;
  }
`
export const PostImageSingle = styled.img`
  width: 100%;
  object-fit: cover;
  display: block;

  &:hover {
    transform: scale(1.02);
  }
`

export const PostImageInGroup = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  line-height: 0;
  margin: 0;
  display: block;

  &:hover {
    transform: scale(1.02);
  }
`

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PostActionWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const PostActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  gap: 1rem;

  img {
    filter: saturate(0) brightness(1.35);
    width: 1.3rem;
    transition: transform 200ms ease;

    &.liked-post {
      filter: none;
    }
  }

  &:hover img {
    transform: scale(1.2);
  }
`

export const LikeCount = styled.p`
  opacity: 50%;
`

export const PostContentContainer = styled.div``

export const ModalPostContainer = styled(PostContainer)`
  width: 80vw;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  height: 32rem;
  overflow: hidden;
  gap: 0;

  ${PostContentContainer} {
    width: 34%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ${(props) =>
    !props.hasImages &&
    css`
      width: 32rem;
      height: 20rem;

      ${PostContentContainer} {
        width: 100%;
      }
    `};

  ${PostImageContainer} {
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 66%;

    overflow: scroll;
    border-right: 1px solid ${(props) => props.theme.colors.lightGray};
  }

  ${PostImage} {
    border-radius: 0;
    max-height: 100%;
    height: 100%;

    &:hover {
      transform: none;
    }
  }

  ${PostHeaderWrapper} {
    padding: 1.5rem;
  }

  ${PostText} {
    flex: 1;
    padding: 0 1.5rem;
  }

  ${FooterContainer} {
    width: 100%;
    flex-direction: column;
  }

  ${LikeCount} {
    width: 100%;
    padding: 1rem 1.5rem;
    text-align: right;
  }

  ${PostActionWrapper} {
    border-top: 1px solid ${(props) => props.theme.colors.lightGray};
    padding: 1.5rem;
    width: 100%;
  }
`
export const NumberOfPhotosHidden = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;

  /* line-height: 0; */

  font-size: 3rem;
  &:hover {
    transform: scale(1.02);
  }
`
