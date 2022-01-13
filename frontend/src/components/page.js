import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUser } from '../actions/pages.js';
import ExternalLink from '../assets/icons/external-link-alt-solid.svg';

// https://preview.redd.it/oe901qo4hth61.png?width=3840&format=png&auto=webp&s=eac9b8f429cf2d88a84ed865b6ee5493ff452dcb

export default function Page () {
    const user = useSelector((state) => state.page.value)

    const dispatch = useDispatch();
    const { userslug } = useParams();

    useEffect(() => {
        dispatch(fetchUser(userslug))
    }, [userslug, dispatch]);
    
    return (<MainPage user={user}/>);
}

const MainPage = ({ user }) => {
    return (user.username ? (
        <main>
            <div>
                {user.cover
                    ? <img className='absolute object-cover -z-10 top-0.5 w-screen h-4/6' src={user.cover}></img>
                    : <div className='absolute object-cover -z-10 top-0.5 w-screen h-4/6 bg-[#181717]'></div>}
            </div>
            <div className="flex flex-col justify-center items-center m-auto mt-20 content-center bg-[#222222] rounded-md py-20 shadow w-10/12 sm:w-10/12 lg:w-8/12 xl:w-6/12">
                <img
                    className="w-32 rounded-full"
                    src={user.pfp}
                ></img>
                <div className="mt-5 text-3xl text-white">
                    <span className="font-bold">{user.username}</span>
                    <span className="text-[#878787]">#{user.usertag}</span>
                </div>
                <div className="flex flex-row mt-5 space-x-3">
                    {Object.entries(user.game_links)
                        .map(([game_name, values], i) => (
                            <GameLink key={i} game_name={game_name} game_link={values.link} />
                    ))}
                </div>
                <p className="mt-6 text-white">
                    {user.bio}
                </p>
            </div>
        </main>
    ) : <div className="flex text-5xl justify-center font-bold text-white m-auto mt-8">Loading...</div>);
}

const GameLink = ({ game_name, game_image, game_link }) => {
    return (
        <a href="#" onClick={() => openLink(game_link)} className="text-white border-[0.7px] border-[#898989] rounded-full py-1 px-4">
            <div className="flex flex-row space-x-2">
                <h1>{game_name}</h1>
                <img className="w-3" src={ExternalLink}></img>
            </div>
        </a>
    );
}

function openLink(link) {
    window.open(link, "_blank")
}