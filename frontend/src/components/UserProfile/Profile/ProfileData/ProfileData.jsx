import {
    LikedThingsContainer, ProfileAboutContainer,
} from './ProfileData.style.js'


function ProfileData(props){
    return (
        <ProfileAboutContainer>
            <div className={'left-container'}>
                <div className={'about'}>
                    <h3>About</h3>
                    <p>{props.userdata.about_me}</p>
                </div>
                <div className={'email'}>
                    <h3>Email</h3>
                    <p>{props.userdata.email}</p>
                </div>
                <div className={'phone'}>
                    <h3>Phone</h3>
                    <p>{props.userdata.phone_number}</p>
                </div>
            </div>

            <div className={'right-container'}>
                <h3>Things I like</h3>
                <LikedThingsContainer>
                    {props.userdata.things_user_likes.map((thing) => {
                        return (
                            <li key={thing}>{thing}</li>
                        )
                    })}
                </LikedThingsContainer>
            </div>
        </ProfileAboutContainer>
    )
}

export default ProfileData
