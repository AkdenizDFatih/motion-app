import {
    NotificationsContainer, RequestTypeContainer
} from '../Navigation.style.js'
import FriendRequest from './FriendRequest.jsx'


const FriendsRequestsContainer = ({sentRequests, receivedRequests}) => {
    return (
        <NotificationsContainer>
            {receivedRequests.length > 0 &&
                <RequestTypeContainer>
                    <p>Received Requests</p>
                    <div className={'requests-wrapper'}>
                        {receivedRequests?.map((request) => <FriendRequest key={request.id} user={request.requester} requestId={request.id}/>
                        )}
                    </div>
                </RequestTypeContainer>
            }
            {sentRequests.length > 0 &&
                <RequestTypeContainer>
                    <p>Sent Requests</p>
                    <div className={'requests-wrapper'}>
                        {sentRequests?.map((request) => <FriendRequest key={request.id} user={request.receiver} requestId={request.id} sentRequest/>
                        )}
                    </div>
                </RequestTypeContainer>
            }
        </NotificationsContainer>
    )
}

export default FriendsRequestsContainer