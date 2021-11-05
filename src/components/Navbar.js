import './Navbar.css'
 import React from 'react'
 import PropTypes from 'prop-types'
 import { Link } from 'react-router-dom'
 export default function Navbar(props) {
     return (
         <nav className="navigation" style = {props.styles}>
             <div className="logo">
                 <h2><Link to = "/"  style = {props.styles} >{props.title}</Link></h2>
                 <Link to="/" className="links" style = {props.styles}>Home</Link>
                 <Link to="/about" className="links" style = {props.styles}>About</Link>
                 <Link to="/contact" className="links" style = {props.styles}>Contact</Link>
             </div>
            <div className="menus">

            </div>
            <div className="search">
                
            </div>
         </nav>
     )
 }
 

 Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     content: PropTypes.string
 }