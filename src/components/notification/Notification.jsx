import React from 'react'
import './notification.css'

const Notification = ({data, onClick}) => {
    return (
        <article 
            className={data.status === "not" ? "not_read" : ""}
            onClick={onClick}
        >
            <img className="avatar" src={`profile-pictures/avatar-${data.name}.webp`} alt={`${data.name}'s profile picture`} />

            <div className="message">

                <p>
                    <span className="name">{`${data.name} `}</span>
                    {`${data.msg} `}
                    <span className='link'>{data.link}</span>
                    <span className='post'>{data.post}</span>
                    {data.status === "not" && (
                    
                       <span className="red"></span>
                    
                )}
                </p>
                <span className="time">{data.date}</span>
                {data.dm && (
                    <div className="content">
                        {data.dm}
                    </div>
                )}
            </div>
            {data.img &&(
                <img className='avatar' src={`image/${data.img}.webp`} alt={`post image`}/>
            )

            }
        </article>
    )
}

export default Notification