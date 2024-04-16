import { useState } from 'react'
import {
  Avatar,
  PostText,
  PostHeaderWrapper,
  AuthorInfoWrapper,
  ProfileLinkWrapper,
  EditButton,
  SharedPostContainer,
} from './Post.style.js'
import defaultAvatar from '../../../assets/svgs/avatar.svg'
import { useSelector } from 'react-redux'
import ReactTimeAgo from 'react-time-ago'
import MenuDot from '../../../assets/svgs/menu.svg'
import ModalPost from './ModalPost.jsx'
import PostImages from './PostImages.jsx'

const SharedPost = ({ postData }) => {
  const userData = useSelector((store) => store.loggedInUser.user)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <SharedPostContainer>
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
          <ModalPost postData={postData} onClose={setModalIsOpen} />
        )}
      </PostHeaderWrapper>
      <PostHeaderWrapper>
        <PostText onClick={() => setModalIsOpen(true)}>
          {postData.content}
        </PostText>
      </PostHeaderWrapper>
      <PostImages images={postData.images} setModalIsOpen={setModalIsOpen} />
    </SharedPostContainer>
  )
}

export default SharedPost
