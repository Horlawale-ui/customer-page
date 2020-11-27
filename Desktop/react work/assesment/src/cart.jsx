import React, { Component, useState, useEffect  } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Profile from './profile.jsx';
import axios from 'axios';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function carts () {
    const classes = useStyles();
    return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow> 
                <TableCell>Name</TableCell>
                <TableCell align="right">category</TableCell>
                <TableCell align="right">Price($)</TableCell>
                 <TableCell align="right">Total</TableCell> 
            </TableRow>
        </TableHead>
        <TableBody>
        {
            data.items.map(item =>
                <TableRow key={item.name}>
                     <TableCell component="th" scope="row">
                         {item.name}
                     </TableCell>
                    <TableCell align="right">{item.category}</TableCell>
                    <TableCell align="right">{item.quantity}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.price*item.quantity}</TableCell>
                </TableRow>
                )
        }
        </TableBody>
    </Table>
    </TableContainer>
}
function Sum (Props) {
    return (
    <h2 className="totalsum">{Props.total}</h2>
    )
}
const goods = () => {
    const [data, setData] = useState([]);

    const getResponse = () => {
        let url = 'https://indapi.kumba.io/webdev/assignment';
        axios.get(url).then(res => {
            setData(res.data);
        });
    };

    useEffect(getResponse, []);

}
class Cart extends Component {
    
    render() {
        
        return (
            <div>
                <Profile/>
                <carts goods={goods}/>
            </div>
        );
    }
}

export default Cart;
