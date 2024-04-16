import {
    FriendAvatar, FriendCardContainer, FriendName, FriendLocation,
    ButtonsWrapper, FriendAbout, FriendCardHeader,
} from './FriendCard.style.js'
import avatarImage from '../../assets/svgs/avatar.svg'
import FollowAddButtons from '../FollowAddFriendButtons/FollowAddButtons.jsx'
import {LikedThingsContainer} from '../UserProfile/Profile/ProfileData/ProfileData.style.js'


const FriendCard = ({friendInfo, requestObject}) => {
    return (
        <FriendCardContainer>
            <FriendCardHeader to={`/profile/${friendInfo.id}`}>
                <FriendAvatar alt="avatar" src={friendInfo.avatar || avatarImage}/>
                <FriendName>{friendInfo.first_name ? `${friendInfo.first_name} ${friendInfo.last_name}` : friendInfo.email}</FriendName>
                <FriendLocation>{friendInfo.location}</FriendLocation>
            </FriendCardHeader>
            <ButtonsWrapper>
                <FollowAddButtons friendInfo={friendInfo} requestObject={requestObject}/>
            </ButtonsWrapper>
            <FriendAbout>
                {friendInfo.about_me}
            </FriendAbout>
            <LikedThingsContainer centered>
                {friendInfo.things_user_likes.map((thing) => <li key={thing}>{thing}</li>
                )}
            </LikedThingsContainer>
        </FriendCardContainer>
    )
}

export default FriendCard


