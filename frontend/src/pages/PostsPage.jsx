import SearchAndFilterBar from '../components/SearchAndFilterBar/SearchAndFilterBar.jsx'
import PostsGrid from '../components/Posts/PostsGrid.jsx'
import {useSelector} from 'react-redux'


const PostsPage = () => {
        const filterStateURLs = {
        'All': '/social/posts/',
        'Liked': '/social/posts/likes/',
        'Friends': '/social/posts/friends/',
        'Follow': '/social/posts/following/',
    }
    const filter = useSelector(store => store.postsFilter.filter)
    

    return (
        <>
            <SearchAndFilterBar/>
            <PostsGrid url={filterStateURLs[filter]}/>
        </>
    )
}

export default PostsPage