import {
  NumberOfPhotosHidden,
  PostImageContainer,
  PostImageInGroup,
  PostImageMainContainer,
  PostImageSingle,
} from './Post.style'

function PostImages({ images, setModalIsOpen }) {
  return (
    <PostImageMainContainer onClick={() => setModalIsOpen(true)}>
      {/* If only one image, use this (different styling) */}
      {images.length === 1 && (
        <PostImageSingle src={images[0].image} alt={images[0].image} />
      )}
      {/* This adds logic for multiple images with different styling */}
      {images.length > 1 && (
        <PostImageContainer>
          {images.slice(0, 4).map((image, index) => (
            <div key={image.id} style={{ position: 'relative' }}>
              <PostImageInGroup
                key={image.id}
                src={image.image}
                alt={image.image}
              />
              {/* If there are more than 4 images, we overlay the number of hidden images */}
              {index === 3 && images.length > 4 && (
                <NumberOfPhotosHidden>
                  + {images.length - 4}
                </NumberOfPhotosHidden>
              )}
            </div>
          ))}
        </PostImageContainer>
      )}
    </PostImageMainContainer>
  )
}

export default PostImages
