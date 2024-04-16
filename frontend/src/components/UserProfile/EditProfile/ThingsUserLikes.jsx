import {useState} from 'react'
import {LikedThingsContainer} from '../Profile/ProfileData/ProfileData.style.js'


const ThingsUserLikes = ({things, setUserData, userData}) => {
    const [newThing, setNewThing] = useState('')

    const submitNewThing = (e) => {
        e.preventDefault()
        if(newThing.length > 0){
            setUserData({...userData, things_user_likes: [...things, newThing]})
            setNewThing('')
        }
    }

    const removeThing = (e) => {
        const thingToRemove = e.target.previousSibling.innerHTML
        setUserData({...userData, things_user_likes: things.filter(thing => thing !== thingToRemove)})
    }

    return (
        <>
            <div className={'input-field things-liked'}>
                <label>Things I Like</label>
                <LikedThingsContainer>
                    {things?.map((thing) => {
                        return (
                            <li key={thing}><span>{thing}</span>
                                <button onClick={removeThing}>&#10005;</button>
                            </li>
                        )
                    })}
                </LikedThingsContainer>
                <form onSubmit={submitNewThing} className="input-submit-wrapper">
                    <input type="text" id="things_user_likes" onChange={(e) => setNewThing(e.target.value)} value={newThing} placeholder={'Type something ...'}/>
                    <button onClick={submitNewThing}>Add</button>
                </form>
            </div>
        </>
    )

}

export default ThingsUserLikes
