import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../actions/pages.js';

export default function Page () {
    const user = useSelector((state) => state.page.value)

    const dispatch = useDispatch();
    const { userslug } = useParams();

    useEffect(() => {
        dispatch(fetchUser(userslug))
    }, [user, dispatch])

    return (
        <div className="text-white">
            Username: {user.username}#{user.usertag}<br></br>
            Userslug: {user.userslug}<br></br>
            Bio: {user.bio}<br></br>
            Current Playing: {user.current_playing}<br></br>
        </div>
    )
}
