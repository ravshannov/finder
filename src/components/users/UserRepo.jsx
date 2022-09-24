import React from 'react'
import {FaCogs,FaDownload,FaEye,FaFileCode} from 'react-icons/fa'
function UserRepo({repo,index}) {
  return (
    <div className='repo'>
        <h3 className="repo-index">{index}</h3>
        <div className="repo-box">
            <div className="repo-title">{repo.name}</div>
            <div className="repo-info">
                {repo.language ? (
                    <p className="repo-text"><FaCogs /> {repo.language}</p>
                ):(
                    <p className="repo-text"><FaCogs /> unknown</p>
                )}
                <p className="repo-text"><FaEye /> {repo.watchers}</p>
                <p className="repo-text"><FaFileCode /> size: {repo.size}</p>
                <a href={repo.html_url} className="repo-link"><FaDownload /> download</a>
            </div>
        </div>
    </div>
  )
}

export default UserRepo