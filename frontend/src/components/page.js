import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as api from "../api/api.js";

export default function Page () {
    const [page, setPage] = useState({});
    const { userslug } = useParams();

    useEffect(() => {
        async function fetchData() {
            await api.fetchUser(userslug)
                .then((returnedData) => setPage(returnedData.data))
                .catch((error) => console.log(error.message));
        }
        fetchData();
    }, [userslug])

    return (
        <div>
            Username: {page.username}#0000<br></br>
            Userslug: {page.userslug}<br></br>
            Bio: {page.bio}<br></br>
            Current Playing: {page.current_playing}<br></br>
        </div>
    )
}
