import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function Header() {
  return (
    <div className='Header'>
        <div className='Left-side'>
            <div className='Logo'>
                <a href='' >
                <img src='../../images/logo.png' alt='logo'></img>
                </a>
            </div>
        </div>
        
        <div className='Right-side'>
            <div className='Search'>
                {/* <input type='text' placeholder='Search...'></input> */}
                <SearchIcon className='Search=logo'/>
            </div>
            
            <div className='Login'>
                <a href=''>Login</a>
            </div>
                <ShoppingBagOutlinedIcon className='Cart'/>
        </div>
        
    </div>
  )
}

export default Header