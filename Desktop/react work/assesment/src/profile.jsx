import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


const Profile =() => {

    const [data, setData] = useState([]);


    const getResponse = () => {
        let url = 'https://indapi.kumba.io/webdev/assignment'
        axios.get(url).then(res => {
            setData(res.data);
        })
    }

    console.log(data);

    useEffect(getResponse, [setData])

    return(
        <div>
        <div className="container">
              <div>
                   <img style={{width:"260px", height:"260px",borderRadius:"90px"}}
                    src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                    alt="profile"
                    />
                </div>
                <div>
                    <h1>Aremu Khindave</h1>
                    <div style={{display:"flex", justifyContent: "space-between", width:"105%"}}>
                        <h3>20 Saved</h3>
                        <h3>20 liked</h3>
                        <h3>10 Favorite</h3>
                    </div>
                </div>
        </div>
            <div className="gallery">
                <img className="items" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="customer"/>
                <img className="items" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="customer"/>
                <img className="items" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="customer"/>
                <img className="items" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="customer"/>
                <img className="items" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfDJ8MHw%3D&auto=format&fit=crop&w=500&q=60" 
                alt="customer"/>
            </div>
        </div>
    )

}
export default Profile;

