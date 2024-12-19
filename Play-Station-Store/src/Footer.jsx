import React from 'react'
import './Footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className='footer'>
        <div className='links'>
            <a href=''>About</a>
            <a href=''>Contact US</a>
            <a href=''><LinkedInIcon/></a>
            <a href=''><GitHubIcon/></a>
        </div>
        <div className='lastLogo'>
            <img src='../Images/psButtonLogo.png' alt=' button logo'></img><p>@Copyright 2003</p>
        </div>
    </div>
  )
}

export default Footer