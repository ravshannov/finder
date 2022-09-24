import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { searchUser } from '../context/UserAction'
import UserContext from '../context/UserContext'

function UserSearch() {
    const {users,dispatch} = useContext(UserContext)
    const [text,setText] = useState('')
    const textChange = (e)=>{
        setText(e.target.value)
    }
    const searchItem = async (e)=>{
        e.preventDefault()
        if (text === '') {
            alert("enter user's name")
        }else{
            dispatch({type:"LOADING"})
            const userData = await searchUser(text)
            dispatch({
                type:"USERS",
                payload:userData
            })
            setText('')
        }
    }
  return (
    <div className="search">
        <div className="container">
            <form onSubmit={searchItem} className="search-form">
                <div className="search-input">
                    <input type="text" placeholder="Search" value={text} onChange={textChange} />
                    <button type="submit" className="search-btn">
                        <FaSearch />
                    </button>
                </div>
            </form>
            {users.length > 0 && (
            <div className="">
                <button className="search-clear" onClick={()=>dispatch({type:"CLEAR"})}>clear</button>
            </div>
            )}
        </div>
    </div>
  )
}

export default UserSearch