import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [data, setData] = useState([]);

    const getResponse = () => {
        let url = 'https://indapi.kumba.io/webdev/assignment';
        axios.get(url).then(res => {
            setData(res.data);
        });
    };

    useEffect(getResponse, []);

    return (
        <div>
            <div className='container'>
                <div>
                    <img
                        style={{
                            width: '260px',
                            height: '260px',
                            borderRadius: '90px',
                        }}
                        src='https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60'
                        alt='profile'
                    />
                </div>
                <div>
                    <h1>{data.user ? data.user.name : ''}</h1>
                    <div
                        style={{
                            width: '105%',
                        }}
                    >
                        <h3>User_ID :{data.user ? data.user.id : ''}</h3>
                        <h3>Address: {data.user ? data.user.address : ''}</h3>
                        <h3>Phone: {data.user ? data.user.phone : ''}</h3>
                        <h3>Like: {data.user ? data.user.likes : ''}</h3>
                        <h3>Dislikes: {data.user ? data.user.dislikes : ''}</h3>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div>
                    <h2>Restaurant Details</h2>
                    <h4>{data.restaurant ? data.restaurant.name : ''}</h4>
                    <h4>{data.restaurant ? data.restaurant.street : ''}</h4>
                    <h4>{data.restaurant ? data.restaurant.city : ''}</h4>
                    <h4>{data.restaurant ? data.restaurant.state : ''}</h4>
                </div>
                <div>
                    <h2>Available Items</h2>
                    <div
                     style={{ display: 'flex', justifyContent: 'center' }}>
                     <Link to='/cart'>
                    <Button
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        Cart
                    </Button>
                </Link>
            </div>
                </div>
            </div>
            
        </div>
    );
};
export default Profile;