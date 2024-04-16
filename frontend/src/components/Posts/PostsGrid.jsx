import Masonry from 'react-responsive-masonry'
import { MainContainer } from './PostsGrid.style.js'
import CreatePostSmall from './CreatePost/CreatePostSmall.jsx'
import useAutoFetch from '../../hooks/useAutoFetch.js'
import Post from './Post/Post.jsx'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const PostsGrid = ({ url, inProfile }) => {
  const [postToShare, setPostToShare] = useState()
  const searchText = useSelector((store) => store.postsFilter.filterSearch)
  let urlToFetch = url
  if (searchText) {
    urlToFetch = url + `?search=${searchText}`
  }
  const { data, loading, error } = useAutoFetch('get', urlToFetch)
  const [showCreatePostModal, setShowCreatePostModal] = useState(false)

  return (
    <MainContainer>
      <Masonry columnsCount={2} gutter={'2rem'}>
        {!inProfile && (
          <CreatePostSmall
            postToShare={postToShare}
            setModalIsOpen={setShowCreatePostModal}
            modalIsOpen={showCreatePostModal}
            setPostToShare={setPostToShare}
          />
        )}
        {loading && <LoadingSpinner />}
        {error && <p>{error.message}</p>}
        {data &&
          data.results.map((post) => {
            return (
              <Post
                key={post.id}
                postData={post}
                setPostToShare={setPostToShare}
                setShowCreatePostModal={setShowCreatePostModal}
              />
            )
          })}
      </Masonry>
    </MainContainer>
  )
}

export default PostsGrid
