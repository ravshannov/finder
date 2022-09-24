import React, {useEffect} from 'react'
import UserItem from './UserItem'
import Loading from '../pages/Loading'
import UserContext from '../context/UserContext'
import { useContext } from 'react'
function UserList() {
  const {users,loading,searchUser} = useContext(UserContext)


  if (!loading) {
    return (
      <div className='users container'>
        {
          users.map((user)=>(
            <UserItem key={user.id} user={user} />
          ))
        }
      </div>
    )
  }else{
    return <Loading />
  }
}

export default UserList