import PageRoutes from './routes'
import {useDispatch} from 'react-redux'
import useAutoFetch from './hooks/useAutoFetch'
import {logoutUser, loginUser} from './store/slices/loggedInUser.js'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner.jsx'
import {useEffect} from 'react'


const App = () => {
    const dispatch = useDispatch()
    const userData = JSON.parse(localStorage.getItem('user'))
    const accessToken = localStorage.getItem('auth-token')

    const {error, loading} = useAutoFetch('post', 'auth/token/verify/', {token: accessToken})

    useEffect(() => {
        if(error === null){
            dispatch(loginUser({user: userData, accessToken: accessToken}))
        } else {
            dispatch(logoutUser())
            localStorage.clear()
        }
    }, [error, accessToken, dispatch, userData])

    if(loading) return <LoadingSpinner/>

    return <PageRoutes/>
}

export default App