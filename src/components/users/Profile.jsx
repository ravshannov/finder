import React, {useContext,useEffect} from 'react'
import {FaUserFriends,FaUsers,FaMapMarkerAlt,FaGlobe,FaEnvelope,FaTwitter,FaBriefcase,FaBuilding,FaUserShield,FaClock} from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { searchProfile, searchRepos, userData } from '../context/UserAction'
import UserContext from '../context/UserContext'
import Loading from '../pages/Loading'
import UserRepos from './UserRepos'

function Profile() {
    const {loading,profile,repos,dispatch} = useContext(UserContext)
    const params = useParams()
    useEffect(() => {
    const getData = async ()=>{
        const getUserData = await userData(params.login)
        dispatch({type:"USER_DATA",payload:getUserData})
    }
    getData()

    }, [dispatch,params.login])
    const {avatar_url,bio,blog,company,created_at,email,followers,following,html_url,location,login,name,public_repos,twitter_username,type,updated_at,} = profile
    if (loading) <Loading />
  return (
    <>
        <div className="profile container">
            <div className="profile-head">
                <div className="profile-img">
                    <img src={avatar_url} alt="profile image" />
                </div>
                <h2 className="profile-name">{login}</h2>
                <p className="profile-location"><FaMapMarkerAlt /> {location}</p>
                <div className="profile-btn">
                    <a href={html_url} className="profile-github">Github</a>
                    <a href="https://proweb.uz/" className="profile-proweb">Proweb</a>
                </div>
                <p className="profile-bio">{bio}</p>
            </div>
            <div className="profile-body">
                <h3 className="profile-title">{name}</h3>
                <div className="profile-info">
                    <p className="profile-status"><span><FaClock /> Created date: </span>{created_at}</p>
                    <p className="profile-status"><span><FaClock /> Update time: </span>{updated_at}</p>
                    {company && (
                        <p className="profile-status"><span><FaBuilding /> Company: </span>{company}</p>
                    )}
                    {blog && (
                        <p className="profile-status"><span><FaGlobe /> Website: </span>{blog}</p>
                    )}
                    {email && (
                        <p className="profile-status"><span><FaEnvelope /> Email: </span><a href={`mailto:${email}`}>{email}</a></p>
                    )}
                    {twitter_username && (
                        <p className="profile-status"><span><FaTwitter /> Twitter: </span>{twitter_username}</p>
                    )}
                    {type && (
                        <p className="profile-status"><span><FaUserShield /> Status: </span>{type}</p>
                    )}
                </div>
            </div>
            <div className="profile-footer">
                <div className="profile-box">
                    <FaUsers />
                    <div className="">
                        <p className="profile-num">{followers}</p>
                        <p className="profile-text">User's followers</p>
                    </div>
                </div>
                <div className="profile-box">
                    <FaUserFriends />
                    <div className="">
                        <p className="profile-num">{following}</p>
                        <p className="profile-text">User's following</p>
                    </div>
                </div>
                <div className="profile-box">
                    <FaBriefcase />
                    <div className="">
                        <p className="profile-num">{public_repos}</p>
                        <p className="profile-text">User's repositories</p>
                    </div>
                </div>
            </div>
        </div>
        <UserRepos repos={repos} />
    </>
  )
}

export default Profile