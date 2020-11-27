import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import Profile from './profile.jsx';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function Carts() {
    const classes = useStyles();

    const [cartData, setCartData] = useState([]);

    const getResponse = () => {
        let url = 'https://indapi.kumba.io/webdev/assignment';
        axios.get(url).then(res => {
            setCartData(res.data);
        });
    };

    useEffect(getResponse, []);

    return (
        <>
            <Profile/>
            <TableContainer component={Paper} style={{ marginTop: '5rem' }}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align='right'>category</TableCell>
                            <TableCell align='right'>Price($)</TableCell>
                            <TableCell align='right'>Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cartData.items
                            ? cartData.items.map(item => (
                                  <TableRow key={item.name}>
                                      <TableCell component='th' scope='row'>
                                          {item.name}
                                      </TableCell>
                                      <TableCell align='right'>
                                          {item.category}
                                      </TableCell>
                                      <TableCell align='right'>
                                          {item.quantity}
                                      </TableCell>
                                      <TableCell align='right'>
                                          {item.price}
                                      </TableCell>
                                      <TableCell align='right'>
                                          {item.price * item.quantity}
                                      </TableCell>
                                  </TableRow>
                              ))
                            : null}
                    </TableBody>
                </Table>
            </TableContainer>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '3rem',
                }}
            >
                <Link to='/'>
                    <Button
                        style={{
                            backgroundColor: 'green',
                            color: 'white',
                            marginRight: '3rem',
                        }}
                    >
                        Back to HOME
                    </Button>
                </Link>

                <Link to='/profile'>
                    <Button
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        Back to PROFILE
                    </Button>
                </Link>
            </div>
        </>
    );
}

export default Carts;
