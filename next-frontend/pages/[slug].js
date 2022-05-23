import React from 'react';
import { PageHeader } from '../components/header';

const Page = ({ page }) => {
    return (
        <MainPage user={page} />
    );
}

export const getStaticPaths = async () => {
    return { paths: [], fallback: 'blocking' };
}

export const getStaticProps = async (context) => {
    const { params } = context;

    const endpoint = "https://calm-spire-77666.herokuapp.com/api"
    const res = await fetch(`${endpoint}/users/${params.slug}`);

    const page = await res.json();

    return {
        props: {
            page
        }
    }
}

const MainPage = ({ user }) => {
    return (user.username ? (
        <>
            <PageHeader username={user.username} />
            <main className='
                pb-7
                shadow-2xl'
            >
                <div>
                    {user.cover
                        ? <img className='
                            absolute
                            object-cover
                            -z-10
                            top-0
                            w-screen
                            h-4/6' 
                            alt="User cover"
                            src={user.cover}
                        ></img>
                        : <div className='
                            absolute
                            object-cover
                            -z-10
                            top-0
                            w-screen
                            h-4/6
                            bg-[#181717]'
                        ></div>}
                </div>
                <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    m-auto
                    mt-8
                    content-center
                    bg-[#222222]
                    rounded-md
                    py-20
                    shadow
                    w-10/12
                    sm:w-10/12
                    lg:w-8/12
                    xl:w-6/12"
                >
                    <img
                        className="rounded-full w-48"
                        src={user.pfp}
                        alt="User"
                    ></img>
                    <div className="
                        flex
                        flex-row
                        items-center
                        space-x-1
                        mt-5
                        text-3xl
                        text-white"
                    >
                        <div>
                            <span className="font-bold">{user.username}</span>
                            <span className="text-[#878787]">#{user.usertag}</span>
                        </div>
                        {/* {user.isVerified
                            ? <span title="Verified"><img className='w-10/12' alt="Verified checkmark" src={CheckMark}></img></span>
                            : <div/>} */}
                    </div>
                    <div className="flex flex-wrap px-2 mt-5 mx-16">
                        {Object.entries(user.game_links)
                            .map(([game_name, values], i) => (
                                <GameLink key={i} game_name={game_name} game_link={values.link} />
                        ))}
                    </div>
                    <p className="mt-6 px-20 text-[#F2F2F2]">
                        {user.bio}
                    </p>
                </div>
            </main>
        </>
    ) : <div className="
            flex
            text-5xl
            justify-center
            font-bold
            text-white
            m-auto
            mt-8"
        >Loading...</div>);
}

const GameLink = ({ game_name, game_image, game_link }) => {
    return (
        <a href={game_link} target="_blank" rel="noreferrer" title={game_link} className="
            text-white
            border-[0.7px]
            border-[#898989]
            rounded-full
            py-2
            px-3
            mx-1
            mt-3
            m-auto
            hover:bg-[#333333]"
        >
            <div className="flex flex-row space-x-2">
                <h1 className="font-medium">{game_name}</h1>
                {/* <img className="w-3" alt="External link" src={ExternalLink}></img> */}
            </div>
        </a>
    );
}

export default Page;