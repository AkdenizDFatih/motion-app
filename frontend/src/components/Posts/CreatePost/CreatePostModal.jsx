import { useEffect, useState } from 'react'
import {
  CreatePostModalContainer,
  TextField,
  CustomImageUploadButton,
  SubmitButton,
} from './CreatePost.style.js'
import sendIcon from '../../../assets/svgs/send_button.svg'
import uploadIcon from '../../../assets/svgs/Shape.svg'
import Overlay from '../../Overlay/Overlay.jsx'
import useApiRequest from '../../../hooks/useApiRequest.js'
import SharedPost from '../Post/SharedPost.jsx'

const CreatePostModal = ({
  setModalIsOpen,
  userData,
  postToShare,
  setPostToShare,
}) => {
  const [content, setContent] = useState()
  const [imageToUpload, setImageToUpload] = useState([])
  const [imageError, setImageError] = useState('')
  const { sendRequest, error, data } = useApiRequest()

  const uploadPreviewImage = (e) => {
    const imagesFromUpload = Array.from(e.target.files)
    console.log(imageToUpload)
    if (imageToUpload.length === 8) {
      setImageError('You can only upload a maximum of 8 images')
    } else {
      imagesFromUpload.map((image, index) => {
        const imageBlob = URL.createObjectURL(image)
        setImageToUpload((prevState) => [
          ...prevState,
          { blob: imageBlob, file: image },
        ])
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let formdata = new FormData()
    formdata.append('content', content)
    //if it is a share of a post, then link it to the post to share
    if (postToShare) {
      formdata.append('shared', postToShare.id)
    }
    imageToUpload.map((image) => {
      formdata.append('images', image.file)
    })
    if (imageToUpload.length < 8) {
      // Here we are missing some error handling, and just closing after the sendRequest has been done... maybe update later
      sendRequest('post', 'social/posts/', formdata, true)
      setPostToShare(undefined)
      setModalIsOpen(false)
    }
  }

  const removeImage = (clickedImage) => {
    setImageToUpload(imageToUpload.filter((image) => image !== clickedImage))
    setImageError('')
  }

  return (
    <Overlay onClose={setModalIsOpen} setPostToShare={setPostToShare}>
      <CreatePostModalContainer postToShare={postToShare}>
        <div className={'body-container'}>
          <img className={'user-avatar'} src={userData.avatar} />
          <TextField
            className={'content-input'}
            id="content"
            cols="40"
            rows="2"
            name="content"
            value={content}
            placeholder={`What's on your mind ${
              userData.first_name && `, ${userData.first_name}`
            }?`}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {postToShare && <SharedPost postData={postToShare} />}
        <div className={'bottom-image-container'}>
          {imageError && <p>{imageError}</p>}
          <div className={'image-preview-container'}>
            {imageToUpload &&
              imageToUpload.map((image) => {
                return (
                  <div key={image.blob} className={'image-preview-instance'}>
                    <button onClick={() => removeImage(image)}>X</button>
                    <img
                      className={'user-avatar'}
                      src={image.blob}
                      width={400}
                    />
                    <span>{image.file.name}</span>
                  </div>
                )
              })}
          </div>
        </div>
        <div className={'footer-container'}>
          {!postToShare && (
            <>
              <CustomImageUploadButton>
                <img src={uploadIcon} />
                <input
                  type="file"
                  multiple
                  className={'image-upload-button'}
                  accept="image/*"
                  onChange={uploadPreviewImage}
                />
              </CustomImageUploadButton>
            </>
          )}
          <SubmitButton className={'send-post-button'} onClick={handleSubmit}>
            <img src={sendIcon} />
          </SubmitButton>
        </div>
      </CreatePostModalContainer>
    </Overlay>
  )
}

export default CreatePostModal
