import { useState } from 'react'
import {
  Avatar,
  PostText,
  LikeCount,
  PostHeaderWrapper,
  AuthorInfoWrapper,
  PostImage,
  FooterContainer,
  ProfileLinkWrapper,
  PostActionButton,
  PostActionWrapper,
  ModalPostContainer,
  PostContentContainer,
  EditButton,
  ModalPostImageContainer,
  ModalLeftSideContainer,
  ModalButtonContainer,
  ModalButton,
} from './Post.style.js'
import likeHeart from '../../../assets/svgs/heart_rgb.png'
import shareArrow from '../../../assets/svgs/share.svg'
import defaultAvatar from '../../../assets/svgs/avatar.svg'
import { useSelector } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import MenuDot from '../../../assets/svgs/menu.svg'
import Overlay from '../../Overlay/Overlay.jsx'
import arrowLeftIcon from '../../../assets/images/arrowLeftIcon.png'
import arrowRightIcon from '../../../assets/images/arrowRightIcon.png'

const ModalPost = ({
  postData,
  onClose,
  postIsLiked,
  amountOfLikes,
  handleClickLike,
  setPostToShare,
}) => {
  const userData = useSelector((store) => store.loggedInUser.user)
  const [editModeActive, setEditModeActive] = useState(false)

  const [imageIndex, setImageIndex] = useState(0)

  const postHasImages = postData.images.length > 0

  const handleImageScroll = (number) => {
    if (imageIndex + number < 0) {
      setImageIndex(postData.images.length - 1)
    } else {
      setImageIndex((prev) => (prev + number) % postData.images.length)
    }
  }

  return (
    <Overlay onClose={onClose} setPostToShare={setPostToShare}>
      <ModalPostContainer hasImages={postHasImages}>
        <ModalLeftSideContainer>
          {postHasImages && (
            <ModalPostImageContainer>
              <PostImage
                src={postData.images[imageIndex].image}
                alt={postData.images[imageIndex].image}
              />
              {postData.images.length > 1 && (
                <ModalButtonContainer>
                  <ModalButton onClick={() => handleImageScroll(-1)}>
                    <img src={arrowLeftIcon} alt="Left Arrow" />
                  </ModalButton>
                  <ModalButton onClick={() => handleImageScroll(1)}>
                    <img src={arrowRightIcon} alt="Right Arrow" />
                  </ModalButton>
                </ModalButtonContainer>
              )}
            </ModalPostImageContainer>
          )}
        </ModalLeftSideContainer>
        <PostContentContainer>
          <PostHeaderWrapper>
            <ProfileLinkWrapper
              to={`/profile/${
                postData.user.id !== userData.id ? postData.user.id : ''
              }`}
            >
              <Avatar
                src={postData.user.avatar || defaultAvatar}
                className={!postData.user.avatar ? 'default' : null}
              />
              <AuthorInfoWrapper>
                <p>{`${postData.user.first_name} ${postData.user.last_name}`}</p>
                <p className={'date'}>
                  <ReactTimeAgo
                    date={Date.parse(postData.created)}
                    locale="en-US"
                  />
                </p>
              </AuthorInfoWrapper>
            </ProfileLinkWrapper>
            {userData.id === postData.user.id && (
              <EditButton onClick={() => setEditModeActive(true)}>
                <img src={MenuDot} />
              </EditButton>
            )}
          </PostHeaderWrapper>
          <PostText>{postData.content}</PostText>
          <FooterContainer>
            <LikeCount>{amountOfLikes} likes</LikeCount>
            <PostActionWrapper>
              <PostActionButton onClick={handleClickLike}>
                <img
                  src={likeHeart}
                  alt="like heart"
                  className={postIsLiked ? 'liked-post' : null}
                />
                {postIsLiked ? 'Liked' : 'Like'}
              </PostActionButton>
              <PostActionButton>
                <img src={shareArrow} alt="share Icon" />
                Share
              </PostActionButton>
            </PostActionWrapper>
          </FooterContainer>
        </PostContentContainer>
      </ModalPostContainer>
    </Overlay>
  )
}

export default ModalPost
