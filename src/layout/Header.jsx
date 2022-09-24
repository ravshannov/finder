import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types'
function Header({title}) {
  return (
    <header className='navbar'>
        <div className="container navbar-nav">
            <div className="navbar-logo">
                <FaGithub className="navbar-icon" />
                <Link to="/" className='navbar-title'>{title}</Link>
            </div>
            <div className="nav-list">
                <Link to="/" className='navbar-link'>Home</Link>
                <Link to="/about" className='navbar-link'>About</Link>
            </div>
        </div>
    </header>
  )
}

Header.defaultProps = {
    title: "Github Finder"
}
Header.propTypes = {
    title: PropTypes.string
}

export default Header