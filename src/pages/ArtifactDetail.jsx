import React, { useEffect, useState } from 'react';
import { Navigate, useLoaderData, useParams } from 'react-router';
import bannerImg from '../assets/resources/story/story.jpg';
import {
    FlaskRound, CalendarClock, Locate,
    UserSearch, MapPin, UserPlus, Mail
} from "lucide-react";
import { IoIosArrowDropdown, IoMdHeart } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { motion } from 'framer-motion';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const ArtifactDetail = () => {
    const {
        _id, artifactName, artifactImage, artifactType,
        historicalContext, shortDescription,
        createdAt, discoveredAt, discoveredBy,
        presentLocation, adderName, adderEmail, likeCount
    } = useLoaderData();

    console.log(likeCount);

    // 

    const { user } = useAuth()

    const [toggle, setToggle] = useState(false);
    const [likes, setLikes] = useState(likeCount);

    useEffect(() => {
        axios.get(`https://historical-artifact-server.vercel.app/is-liked`, {
            params: {
                artifactsID: _id,
                userEmail: user?.email
            }
        }).then(res => {
            if (res.data?.liked === true) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        })
    }, [_id, user?.email]);

    const handleLike = (id, likeCounts) => {

        if (!toggle) {
            setToggle(!toggle)
            axios.post(`https://historical-artifact-server.vercel.app/add-like`, { artifactsID: id, userEmail: user?.email, status: true }).then(res => {
                console.log(res.data)
                if (res?.data?.insertedId) {
                    axios.patch(`https://historical-artifact-server.vercel.app/update-like/${id}`, { likeCount: likeCounts + 1 }).then(res => {
                        console.log(res.data)
                        setLikes(prev => prev + 1);
                    }).catch(err => {
                        console.log(err)
                    })
                }
            }).catch(err => {
                console.log(err)
            })
        }

        else {
            if (likes == 0) return;
            setToggle(!toggle)
            axios.delete(`https://historical-artifact-server.vercel.app/remove-like`, {
                params: {
                    artifactsID: id,
                    userEmail: user.email,
                }
            })
                .then(res => {
                    console.log("Like removed:", res.data);
                    if (res.data.deletedCount) {
                        axios.patch(`https://historical-artifact-server.vercel.app/decrease-like/${id}`, { likeCount: likeCounts - 1 }).then(res => {
                            console.log(res.data)
                            setLikes(prev => prev - 1);
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
                .catch(err => {
                    console.error("Failed to remove like:", err.message);
                });
            console.log("data - hobe")
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <img src={bannerImg} alt="" className='w-full h-[250px] md:h-[350px] object-cover' />

            <h1 className='text-3xl md:text-5xl font-extrabold my-30 text-center text-[#3E1B0B] border-b border-[#3b1f00] w-fit mx-auto pb-2'>
                ABOUT ARTIFACTS
            </h1>

            <div className='flex justify-center items-center px-4 md:px-0 my-10'>
                <div className="flex flex-col md:flex-row border border-gray-200 rounded-lg bg-[#F5F1E8] text-[#3E1B0B] hover:scale-105 hover:shadow-xl hover:-translate-y-2 shadow-md transition-all duration-300 w-full max-w-6xl mx-auto">

                    <div className="w-full md:w-1/2 h-[550px] overflow-hidden rounded-t-lg md:rounded-none md:rounded-l-lg">
                        <img
                            src={artifactImage}
                            alt={artifactName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-center p-6 lg:pl-20 gap-3">
                        <h2 className="text-3xl md:text-4xl font-bold pb-3">{artifactName}</h2>
                        <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-[#3e1b0b1c]">
                            <button onClick={() => handleLike(_id, likes)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF9ED] border border-[#3e1b0b44] hover:bg-[#FDF9ED] hover:border-red-300 transition-colors duration-200 group cursor-pointer">
                                {
                                    toggle ?
                                        <svg
                                            className="w-5 h-5 text-bg-[#3E1B0B] group-hover:text-[#3E1B0B] transition-colors duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <IoMdHeart size={25} className='cursor-pointer bg-[#3E1B0B]' />
                                        </svg>
                                        :
                                        <svg
                                            className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <CiHeart size={25} className='text-[#3E1B0B] group-hover:text-red-500' />
                                        </svg>
                                }
                                <span className="text-sm font-medium text-[#3E1B0B] group-hover:text-red-600">Like</span>
                            </button>
                            <span className="text-sm text-[#3E1B0B]">
                                <span className="font-semibold text-xl">{likes}</span> likes
                            </span>
                        </div>
                        <h3 className="flex items-center gap-2 text-base"><FlaskRound size={20} />Type: {artifactType}</h3>
                        <h3 className="flex items-center gap-2 text-base"><CalendarClock size={20} />Created At: {createdAt}</h3>
                        <h3 className="flex items-center gap-2 text-base"><Locate size={20} />Discovered At: {discoveredAt}</h3>
                        <h3 className="flex items-center gap-2 text-base"><UserSearch size={20} />Discovered By: {discoveredBy}</h3>
                        <h3 className="flex items-center gap-2 text-base"><MapPin size={20} />Present Location: {presentLocation}</h3>
                        <h3 className="flex items-center gap-2 text-base"><UserPlus size={20} />Adder Name: {adderName}</h3>
                        <h3 className="flex items-center gap-2 text-base"><Mail size={20} />Adder Email: {adderEmail}</h3>

                        <a href='#detail' className='flex items-center text-sm text-[#3e1b0b9a] underline mt-2 w-fit'>
                            <IoIosArrowDropdown size={20} /> More Detail
                        </a>
                    </div>
                </div>
            </div>

            <div className='px-4' id='detail'>
                <div className='mx-auto my-30 max-w-6xl border border-gray-200 p-15 bg-[#F5F1E8] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2'>
                    <h3 className='text-4xl font-bold pb-6'>Short Description</h3>
                    <p className=' text-[#3e1b0b9a]'>{shortDescription}</p>
                </div>
            </div>
            <div className='px-4'>
                <div className='mx-auto my-30 max-w-6xl border border-gray-200 p-15 bg-[#F5F1E8] rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2'>
                    <h3 className='text-4xl font-bold pb-6'>Historical Context</h3>
                    <p className=' text-[#3e1b0b9a]'>{historicalContext}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default ArtifactDetail;
