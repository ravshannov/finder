import React from 'react'
import { Link } from 'react-router-dom'

function UserItem({user}) {
  return (
    <div className='user'>
      <div className="user__avatar">
        <div className="user__img">
          <img src={user.avatar_url} alt="userImage" />
        </div>
      </div>
      <div className="user__info">
        <h2 className="user__title">{user.login}</h2>
        <Link to={`/user/${user.login}`}>User's Profile</Link>
      </div>
    </div>
  )
}

export default UserItem