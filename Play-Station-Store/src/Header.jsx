import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
  return (
    <nav className='header'>
        <div className='leftSide'>
            <div className='logo'>
                <a href='' >
                <img src='../../images/logo.png' alt='logo'></img>
                </a>
            </div>
        </div>
        
        <div className='rightSide'>
            <div className='search'>
                {/* <input type='text' placeholder='Search...'></input> */}
                <SearchIcon className='searchLogo'/>
            </div>
            
            <div className='login'>
                <a href=''>Login</a>
            </div>
            <div className='cart'>
                <a href=''>
                <ShoppingBagOutlinedIcon className='cartIcon'/>
                </a>
                <span>
                    <p>0</p>
                </span>
            </div>
                
        </div>
        
    </nav>
  )
}

export default Header