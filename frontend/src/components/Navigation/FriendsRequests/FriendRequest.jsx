import denyButton from '../../../assets/images/denyInv.png'
import acceptButton from '../../../assets/images/acceptInv.png'
import avatarImage from '../../../assets/svgs/avatar.svg'
import {RequestContainer, RequestStatusIcon, ButtonsWrapper} from '../Navigation.style.js'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import clock from '../../../assets/svgs/Groupclock.svg'
import useApiRequest from '../../../hooks/useApiRequest'


const FriendRequest = ({user, requestId, sentRequest}) => {
    const [isClicked, setIsClicked] = useState(true)
    const [message, setMessage] = useState('')

    const {sendRequest} = useApiRequest()

    const handleAcceptRequest = () => {
        sendRequest('patch', 'social/friends/requests/' + requestId, {status: 'A'})
        setIsClicked(false)
        setMessage('Friend Request accepted')
    }

    const handleDenyRequest = () => {
        sendRequest('delete', 'social/friends/requests/' + requestId)
        setIsClicked(false)
        setMessage('Friend Request rejected')
    }

    return (
        <RequestContainer>
            {isClicked ?
                <>
                    <Link to={`/profile/${requestId}`}>
                        <RequestStatusIcon alt="avatar" src={user.avatar ? user.avatar : avatarImage}/>
                        <div className={'user-name-location'}>
                            <p>{user.first_name ? `${user.first_name} ${user.last_name}` : user.email} </p>
                            {user.location && <p className={'user-location'}>{user.location}</p>}
                        </div>
                    </Link>
                    <ButtonsWrapper>
                        {!sentRequest ? <>
                            <RequestStatusIcon alt="acceptButton" src={acceptButton} onClick={handleAcceptRequest}/>
                            <RequestStatusIcon alt="denybutton" src={denyButton} onClick={handleDenyRequest}/>
                        </> : <RequestStatusIcon alt="clock" src={clock} noClick/>
                        }
                    </ButtonsWrapper>
                </>
                :
                <p>{message}</p>
            }
        </RequestContainer>
    )
}

export default FriendRequest