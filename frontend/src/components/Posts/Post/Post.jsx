import { useState } from 'react'
import {
  Avatar,
  PostText,
  LikeCount,
  PostHeaderWrapper,
  AuthorInfoWrapper,
  PostContainer,
  FooterContainer,
  ProfileLinkWrapper,
  PostActionButton,
  PostActionWrapper,
  EditButton,
} from './Post.style.js'
import likeHeart from '../../../assets/svgs/heart_rgb.png'
import shareArrow from '../../../assets/svgs/share.svg'
import defaultAvatar from '../../../assets/svgs/avatar.svg'
import { useSelector } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import useApiRequest from '../../../hooks/useApiRequest.js'
import MenuDot from '../../../assets/svgs/menu.svg'
import ModalPost from './ModalPost.jsx'
import SharedPost from './SharedPost.jsx'
import PostImages from './PostImages.jsx'

const Post = ({ postData, setPostToShare, setShowCreatePostModal }) => {
  const userData = useSelector((store) => store.loggedInUser.user)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [postIsLiked, setPostIsLiked] = useState(postData.logged_in_user_liked)
  const [amountOfLikes, setAmountOfLikes] = useState(postData.amount_of_likes)
  const { sendRequest } = useApiRequest()

  const handleClickLike = () => {
    if (userData.id !== postData.user.id) {
      sendRequest('post', `social/posts/toggle-like/${postData.id}/`)
      setPostIsLiked(!postIsLiked)
      postIsLiked
        ? setAmountOfLikes(amountOfLikes - 1)
        : setAmountOfLikes(amountOfLikes + 1)
    }
  }

  const sharePost = () => {
    setPostToShare(postData)
    setShowCreatePostModal(true)
  }

  return (
    <PostContainer>
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
          <EditButton onClick={() => setModalIsOpen(true)}>
            <img src={MenuDot} />
          </EditButton>
        )}
        {modalIsOpen && (
          <ModalPost
            postData={postData}
            onClose={setModalIsOpen}
            postIsLiked={postIsLiked}
            amountOfLikes={amountOfLikes}
            handleClickLike={handleClickLike}
            setPostToShare={setPostToShare}
          />
        )}
      </PostHeaderWrapper>
      <PostHeaderWrapper>
        <PostText>{postData.content}</PostText>
      </PostHeaderWrapper>

      <PostImages setModalIsOpen={setModalIsOpen} images={postData.images} />

      {postData.shared && <SharedPost postData={postData.shared} />}
      <FooterContainer>
        <PostActionWrapper>
          <PostActionButton onClick={handleClickLike}>
            <img
              src={likeHeart}
              alt="like heart"
              className={postIsLiked ? 'liked-post' : null}
            />
            {postIsLiked ? 'Liked' : 'Like'}
          </PostActionButton>
          <PostActionButton onClick={sharePost}>
            <img src={shareArrow} alt="share Icon" />
            Share
          </PostActionButton>
        </PostActionWrapper>
        <LikeCount>{amountOfLikes} likes</LikeCount>
      </FooterContainer>
    </PostContainer>
  )
}

export default Post
