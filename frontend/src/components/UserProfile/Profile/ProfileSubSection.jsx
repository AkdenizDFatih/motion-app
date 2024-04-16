import { useSelector } from 'react-redux'
import FriendsGrid from '../../FriendsGrid/FriendsGrid.jsx'
import PostsGrid from '../../Posts/PostsGrid'

function ProfileSubSection({ userID }) {
  const filter = useSelector((store) => store.profileFilter) //get state from redux
  const endPointPosts = userID
    ? `social/posts/user/${userID}/`
    : 'social/posts/me/'
  const endPointLikes = userID
    ? `social/posts/likes/user/${userID}`
    : 'social/posts/likes'
  const endPointFriends = userID
    ? `social/friends/user/${userID}`
    : 'social/friends'
  const endPointFollowers = userID
    ? `social/followers/followers/user/${userID}`
    : 'social/followers/followers'
  const endPointFollowing = userID
    ? `social/followers/following/user/${userID}`
    : 'social/followers/following'

  //returns the component to render based on which filter is chosen
  const displayComponent = () => {
    switch (filter) {
      case 'posts':
        return <PostsGrid url={endPointPosts} inProfile />
      case 'likes':
        return <PostsGrid url={endPointLikes} inProfile />
      case 'friends':
        return <FriendsGrid url={endPointFriends} />
      case 'followers':
        return <FriendsGrid url={endPointFollowers} />
      case 'following':
        return <FriendsGrid url={endPointFollowing} />
      default:
        return <PostsGrid url={endPointPosts} inProfile />
    }
  }

  return displayComponent()
}

export default ProfileSubSection
