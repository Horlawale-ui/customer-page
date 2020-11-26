import React, { Component } from 'react';
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


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

function Items (Props) {
    const classes = useStyles();
    return <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow> 
                <TableCell>Name</TableCell>
                <TableCell align="right">Count</TableCell>
                <TableCell align="right">Price($)</TableCell>
                 <TableCell align="right">Total</TableCell> 
            </TableRow>
        </TableHead>
        <TableBody>
        {
            Props.productItems.map(item =>
                <TableRow key={item.name}>
                     <TableCell component="th" scope="row">
                         {item.name}
                     </TableCell>
                    <TableCell align="right">{item.count}</TableCell>
                    <TableCell align="right">{item.price}</TableCell>
                    <TableCell align="right">{item.price*item.count}</TableCell>
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
class Cart extends Component {
    render() {
        const productItems = [
            {name: 'iphone', count: 3, price: 1200},
            {name: 'iphone1', count: 2, price: 1500},
            {name: 'iphone2', count: 1, price: 1600},
            ]
        return (
            <div>
                <Profile/>
                <Items productItems={productItems} />
                <Sum total={productItems.reduce((a,c) => (a+c.price*c.count), 0)}/>
            </div>
        );
    }
}

export default Cart;
