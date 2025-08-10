import React, { useEffect, useState } from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router';
import { IoMdHeart } from 'react-icons/io';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const AllArtifactsCards = ({ Artifacts }) => {

    const { _id, artifactName, artifactImage, shortDescription, likeCount } = Artifacts;
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
        console.log(toggle)
        console.log(likeCount)
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
            if (likeCounts == 0) return;
            setToggle(!toggle)
            console.log("dislike check")
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
        }
    };



    return (
        <div className="card bg-base-100 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
            <figure>
                <img
                    className='h-56 w-full object-cover object-center'
                    src={artifactImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body bg-[#F5F1E8] text-[#3E1B0B]">
                <h2 className="card-title">{artifactName}</h2>
                <p className="">
                    {shortDescription.length > 120
                        ? shortDescription.slice(0, 120) + "..."
                        : shortDescription
                    }
                </p>
                <div className="card-actions justify-between items-center pt-5">
                    <div className='flex items-center gap-2'>

                        <button onClick={() => handleLike(_id, likes)} className=''>{toggle ? <IoMdHeart size={30} className='cursor-pointer' /> : <CiHeart size={30} className='cursor-pointer' />}</button>

                        <span className='text-xl font-bold'> {likes} <span className='text-sm'> Likes</span></span>
                    </div>
                    <Link to={`/artifact-detail/${_id}`}>
                        <button
                            className="btn bg-[#F5F1E8] border-2 border-[#3E1B0B] text-[#3E1B0B] rounded-lg shadow-md
                            hover:bg-[#3E1B0B] hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2
                            transition-colors duration-300"
                        >
                            <IoEyeOutline className="inline mr-2" />
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllArtifactsCards;