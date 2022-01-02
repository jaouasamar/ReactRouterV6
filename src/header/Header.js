import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul className='menu'>
              
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/"> <li>Home</li></Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/product"> <li>Product</li></Link>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/contact"><li>Contact</li></Link>
              
                
            </ul>
        </div>
    )
}

export default Header
