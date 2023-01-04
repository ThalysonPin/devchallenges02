import React from 'react'
import './header.css'
import logo from '../../assets/logo.svg'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <header className='header'>
            <img src={logo} />

            <div className='header-list'>
                <ButtonGroup variant="outlined" aria-label="outlined button group" color="secondary">
                    <Button sx={{border:"2px solid #F2F2F2", color:"gray"}}>One</Button>
                    <Button sx={{border:"2px solid #F2F2F2", color:"gray"}}>Add guests</Button>
                    <Button sx={{border:"2px solid #F2F2F2", color:"gray"}}><SearchIcon sx={{color:"#EB5757"}}/></Button>
                </ButtonGroup>
            </div>
        </header>
    )
}

export default Header
