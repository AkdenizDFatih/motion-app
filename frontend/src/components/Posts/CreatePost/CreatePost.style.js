import styled from 'styled-components'

export const CreatePostModalContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  max-width: 42rem;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;

  .body-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 2rem;
    padding: 2rem;

    .user-avatar {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .bottom-image-container {
    margin: 10px 10px;
    display: flex;
    flex-direction: column;

    p {
      display: flex;
      align-self: center;
      color: red;
      margin-bottom: 10px;
    }
    .image-preview-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      width: 100%;
      grid-column: 2/-1;

      .image-preview-instance {
        position: relative;
        width: 100%;
        height: fit-content;

        button {
          position: absolute;
          top: 0.3rem;
          right: 0.3rem;
          width: 1.4rem;
          height: 1.4rem;
          border: none;
          border-radius: 50%;
          background-color: white;
          cursor: pointer;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0.3rem;
        }

        span {
          width: 100%;
          display: block;
          font-size: 0.875rem;
        }
      }
    }
  }

  .footer-container {
    display: flex;
    justify-content: ${(props) =>
      props.postToShare ? 'flex-end' : 'space-between'};
    align-items: center;
    border-top: 1px solid #ccc;
    padding: 1rem 2rem;
  }
`

export const TextField = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  font: inherit;
  line-height: 1.6;
  background: none;
  resize: none;
`

export const CustomImageUploadButton = styled.div`
  position: relative;
  width: 1.2rem;
  height: 1.2rem;

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    opacity: 40%;
  }
`

export const SubmitButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  aspect-ratio: 1;
`

export const CreatePostCardContainer = styled.div`
  width: 100%;
  min-height: 6rem;
  background: #ffffff;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.8rem;
`

export const WrapperDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  p {
    color: ${(props) => props.theme.colors.lightGray};
  }

  img:nth-of-type(2) {
    width: 32px;
  }
`
export const Avatar = styled.img`
  width: 7rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`
