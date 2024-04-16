import {useState} from 'react'

import FriendsGrid from '../components/FriendsGrid/FriendsGrid.jsx'


const FindFriends = () => {
    const [randomNumber, setRandomNumber] = useState(Math.round(Math.random() * 100))

    return (
        <FriendsGrid url={`users/?limit=12&offset=${randomNumber}/`}/>
    )
}

export default FindFriends