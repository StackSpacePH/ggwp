import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from "../api/api.js";

export default function Page () {
    const [user, setUser] = useState({});
    const { userslug } = useParams();

    useEffect(() => {
        async function fetchData() {
            await api.fetchUser(userslug)
                .then((returnedData) => setUser(returnedData.data))
                .catch((error) => console.log(error.message));
        }
        fetchData();
    }, [userslug])

    return (
        <div>
            Username: {user.username}#{user.usertag}<br></br>
            Userslug: {user.userslug}<br></br>
            Bio: {user.bio}<br></br>
            Current Playing: {user.current_playing}<br></br>
        </div>
    )
}
