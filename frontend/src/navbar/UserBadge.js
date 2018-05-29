import React from 'react'

export default function UserBadge({user}) {
    return (
        <span>
            <img
                src={user.pictureURI}
                alt=""
                className="user-avatar-24"
            />
            <span>
                {user.name}
            </span>
        </span>
    )

}