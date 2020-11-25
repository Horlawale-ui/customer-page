import React from 'react';
import './App.css';
import {Menu, MenuItem, Button} from '@material-ui/core';
import {Link,Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import Profile from './profile.jsx';


const Menunav = () => {

  const [openMenu,setOpenMenu] = React.useState(null);
  const HandleMenu=()=>{
    setOpenMenu(true)
  }
  const closeMenu =() =>
  {
    setOpenMenu(false)
  }

  return (
    <Router>
      <Button onClick={HandleMenu}>Open Meun</Button>
      <Menu open={openMenu} onClose={closeMenu}>
        <MenuItem onClick={closeMenu}><Link to="./">Home</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="./Profile">Account</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="./cart">Cart</Link></MenuItem>
        <MenuItem onClick={closeMenu}><Link to="./logout">LogOut</Link></MenuItem>
      </Menu>
      <Switch>
      <Route path="./Profile"><Profile/></Route>
      <Route exact path="./"><Home/></Route>
      </Switch>
    </Router>
  );
}
function Home(){
  return (<h1>Home Page</h1>)
}
export default Menunav;