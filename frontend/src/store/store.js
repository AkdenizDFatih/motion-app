import {configureStore} from '@reduxjs/toolkit'
import loggedInUser from './slices/loggedInUser.js'
import profileFilter from './slices/profileFilter'
import postsFilter from './slices/postsFilter'
import friendRequests from './slices/friendRequests.js'

export default configureStore({
    reducer: {
        loggedInUser: loggedInUser,
        profileFilter: profileFilter,
        postsFilter: postsFilter,
        friendRequests: friendRequests,
    },
},)
