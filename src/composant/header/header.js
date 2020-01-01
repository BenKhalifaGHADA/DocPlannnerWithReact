import React from 'react'
import './header.css';
import Logo from './Logo';
import Navbar from './navbar/NavBar.js'

export const Header = (props) => {
    return (
        <div>
           <header> 
           <Logo/>
           <Navbar items={props.items}/>
           </header>
        </div>
            )
        }
export default Header