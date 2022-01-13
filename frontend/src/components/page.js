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

    return (<MainPage user={user} game_data={game_data}/>);
}

function MainPage({ user, game_data }) {
    return (
        <main className="flex flex-col justify-center items-center m-auto mt-8 content-center bg-[#222222] rounded-md py-20 shado w-10/12 sm:w-10/12 lg:w-8/12 xl:w-6/12">
            <img
                className="w-32 rounded-full"
                src={user.pfp}
            ></img>
            <div className="mt-5 text-3xl text-white">
                <span className="font-bold">{user.username}</span>
                <span className="text-[#878787]">#{user.usertag}</span>
            </div>
            <div className="flex flex-row mt-5 space-x-3">
                {user.game_links.map((game, i) => <GameLink key={i} game_name={game} />)}
            </div>
            <p className="mt-6 text-white">
                {user.bio}
            </p>
        </main>
    );
}

function GameLink({ game_name, game_image }) {
    return (
        <button className="text-white border-[0.7px] border-[#898989] rounded-full py-1 px-4">
            <div>
                <img src={game_image}></img>
                <h1>{game_name}</h1>
                <img></img>
            </div>
        </button>
    );
}
