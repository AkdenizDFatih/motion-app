import {createSlice} from '@reduxjs/toolkit'


export const profileFilter = createSlice({
    name: 'profile-filter',
    initialState: 'posts',
    reducers: {
        setProfileFilter: (state, action) => {
            return state = action.payload
        },
    },
})
export const {setProfileFilter} = profileFilter.actions
export default profileFilter.reducer