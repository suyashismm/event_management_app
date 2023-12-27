import {AppBar,Toolbar,Box,Menu,MenuItem} from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../App.css';
import {SignupBtn,LoginBtn} from './CustomButton';
import { useContext, useState } from 'react';
import { accountContext } from '../context/DataProvider';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {

    const {account,setAccount} = useContext(accountContext);
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const logout = () => {
        setAccount('');
    }

    return(
        <AppBar position='static'>
            <Toolbar>
                <NavLink to="/" className="navs">Home</NavLink>
                {
                    account !== '' ? 
                    <> 
                    <NavLink to="/" className="navs">My Events</NavLink>
                    <NavLink to="/create-event" className="navs">Create Events</NavLink>
                    <Box style={{marginLeft:"43rem",cursor:"pointer"}} onClick={handleClick}>{account}</Box>
                    <Menu
                        anchorEl={open}
                        open={Boolean(open)}
                        onClose={handleClose}>
                        <MenuItem onClick={()=>{handleClose(); navigate('/'); logout();}}>Logout</MenuItem>
                    </Menu>

                    </>  :
                <>
                    <NavLink to="/signup" style={{textDecoration:"none"}}><SignupBtn/></NavLink>
                    <NavLink to="/login" style={{textDecoration:"none"}}><LoginBtn/></NavLink>
                </>
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;