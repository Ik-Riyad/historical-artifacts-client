import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Lottie from "lottie-react";
import noDataLottie from '../../assets/lotties/nodata.json';
import MyLikesArtifacts from '../../components/MyLikesArtifacts';

const LikedArtifacts = () => {


    const { user } = useAuth(); // user object from firebase auth

    const [myLikes, setMyLikes] = useState([]);


    useEffect(() => {
        if (user?.email) {
            axios.get(`https://historical-artifact-server.vercel.app/liked-artifacts?email=${user?.email}`, {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            })

                .then((res) => {
                    const liked = res.data;
                    console.log(liked)
                    setMyLikes(liked);

                })
                .catch(err => {
                    console.error('Error fetching likes:', err);
                });
        }
    }, [user?.email, user?.accessToken]);

    return (
        <div className='mb-32'>
            <title>Historical Artifacts | Liked Artifacts</title>
            {
                myLikes && myLikes.length > 0 ? (
                    <div>
                        <h1 className='text-7xl font-extrabold mt-30 mb-10 text-center text-[#3E1B0B] border-b border-[#3b1f00] w-fit mx-auto pb-5'>
                            My Liked Artifacts
                        </h1>
                        <div className='grid gap-10 mt-20 px-4 md:grid-cols-2 lg:grid-cols-3 justify-items-center max-w-screen-xl mx-auto'>
                            {
                                myLikes.map((likeArtifact) => (
                                    <MyLikesArtifacts
                                        key={likeArtifact._id} // Use a unique id instead of index
                                        user={user}
                                        setMyLikes={setMyLikes}
                                        likeArtifact={likeArtifact}
                                    />
                                ))
                            }
                        </div>
                    </div>
                ) : (
                    <div className='mt-20'>
                        <h2 className='text-5xl font-extrabold mt-30 mb-10 text-center text-[#FF5A5F] border-b border-[#FF5A5F] w-fit mx-auto pb-5'>
                            No liked artifacts found.
                        </h2>
                        <Lottie style={{ width: "500px", margin: "0px auto" }} animationData={noDataLottie} loop={true} />

                    </div>

                )
            }
        </div>

    );
};

export default LikedArtifacts;