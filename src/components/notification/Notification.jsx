import React, {useContext} from 'react'
import './notification.css'
import { Usercontext } from '../../App'

const Notification = ({ onClick}) => {

    const user =useContext(Usercontext);
    

    return (
        <article 
            className={user.status === "not" ? "not_read" : ""}
            onClick={onClick}
        >
            <img className="avatar" src={`profile-pictures/avatar-${user.name}.webp`} alt={`${user.name}'s profile picture`} />

            <div className="message">

                <p>
                    <span className="name">{`${user.name} `}</span>
                    {`${user.msg} `}
                    <span className='link'>{user.link}</span>
                    <span className='post'>{user.post}</span>
                    {user.status === "not" && (
                    
                       <span className="red"></span>
                    
                )}
                </p>
                <span className="time">{user.date}</span>
                {user.dm && (
                    <div className="content">
                        {user.dm}
                    </div>
                )}
            </div>
            {user.img &&(
                <img className='avatar' src={`image/${user.img}.webp`} alt={`post image`}/>
            )

            }
        </article>
    )
}

export default Notification