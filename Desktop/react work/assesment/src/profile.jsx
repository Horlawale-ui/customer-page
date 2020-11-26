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

    console.log(data);

    useEffect(getResponse, [setData]);

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
                    <h1>{data.user.name}</h1>
                    <div
                        style={{
                            width: '105%',
                        }}
                    >
                        <h3>User_ID :{data.user.id}</h3>
                        <h3>Address: {data.user.address}</h3>
                        <h3>Phone: {data.user.phone}</h3>
                         <h3>Like: {data.user.likes}</h3>
                    <h3>Dislikes: {data.user.dislikes}</h3>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Link to='/'>
                    <Button
                        style={{ backgroundColor: 'green', color: 'white' }}
                    >
                        take me Home
                    </Button>
                </Link>
            </div>
            <div>
                    <h2>{data.restaurant.name}</h2>
            </div>
        </div>
    );
};
export default Profile;
