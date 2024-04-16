import { useEffect, useState } from 'react'
import { FollowOrRequestButton, TickerImage } from './FollowAddButtons.style.js'
import tickerImage from '../../assets/svgs/Ticker.svg'
import useApiRequest from '../../hooks/useApiRequest.js'
import { setRequests } from '../../store/slices/friendRequests.js'
import { useDispatch } from 'react-redux'

function FollowAddButtons({ friendInfo, requestObject }) {
  // const {sendRequest, data} = useApiRequest(requestObject?.status)
  const { sendRequest, data } = useApiRequest()
  const dispatch = useDispatch()
  const [deleteRequestHover, setHover] = useState(false)
  const [FollowUser, setFollowUser] = useState(
    friendInfo.logged_in_user_is_following
  )
  const [requestStatus, setRequestStatus] = useState(undefined)

  useEffect(() => {
    setRequestStatus(requestObject?.status)
  }, [requestObject])

  useEffect(() => {
    dispatch(setRequests(data?.results))
  }, [data])

  const toggleFriendFollow = () => {
    setFollowUser(!FollowUser)
    sendRequest('post', `social/followers/toggle-follow/${friendInfo.id}/`)
  }

  const sendFriendRequest = () => {
    sendRequest('post', `social/friends/request/${friendInfo.id}/`)
    sendRequest('get', 'social/friends/requests')
    setRequestStatus('P')
  }

  const deleteFriendOrRequest = () => {
    sendRequest('delete', `social/friends/requests/${requestObject.id}/`)
    sendRequest('get', 'social/friends/requests')
    setRequestStatus(undefined)
  }

  return (
    <>
      <FollowOrRequestButton follow={FollowUser} onClick={toggleFriendFollow}>
        {FollowUser ? 'Following' : 'Follow'}
      </FollowOrRequestButton>
      {requestStatus !== undefined && (
        <FollowOrRequestButton
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={deleteFriendOrRequest}
        >
          {requestStatus === 'A' &&
            (!deleteRequestHover ? 'friend' : 'quit friendship')}
          {requestStatus === 'P' &&
            (!deleteRequestHover ? (
              <>
                <TickerImage src={tickerImage} />
                Request sent
              </>
            ) : (
              'Revoke request'
            ))}
        </FollowOrRequestButton>
      )}
      {requestStatus === undefined && (
        <FollowOrRequestButton onClick={sendFriendRequest}>
          Add friend
        </FollowOrRequestButton>
      )}
    </>
  )
}

export default FollowAddButtons
