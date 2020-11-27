import React from 'react';
import './App.css';
import { Menu, MenuItem, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Menunav = () => {
    const [openMenu, setOpenMenu] = React.useState(null);

    const HandleMenu = () => {
        setOpenMenu(true);
    };
    const closeMenu = () => {
        setOpenMenu(false);
    };

    return (
        <div className='main_btn'>
            <Button onClick={HandleMenu}>Open Meun</Button>
            <Menu open={openMenu} onClose={closeMenu}>
                <MenuItem onClick={closeMenu}>
                    <Link to='/'>Home</Link>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                    <Link to='/profile'>Account</Link>
                </MenuItem>
                <MenuItem onClick={closeMenu}>
                    <Link to='/cart'>Cart</Link>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default Menunav;
