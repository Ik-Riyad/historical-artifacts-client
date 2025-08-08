import axios from 'axios';
import React, { useState } from 'react';
import { IoEyeOutline } from 'react-icons/io5';
import { IoMdHeart } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router';

const MyLikesArtifacts = ({ likeArtifact, setMyLikes, user }) => {

    const [toggle, setToggle] = useState(true);

    const handleLike = (id, likeCount) => {
        // console.log(id)
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
                    axios.patch(`https://historical-artifact-server.vercel.app/decrease-like/${id}`, { likeCount: likeCount - 1 }).then(res => {
                        console.log(res.data)
                    }).then(() => {
                        setMyLikes(prevCards => prevCards.filter(card => card._id !== id));
                    }).catch(err => {
                        console.log(err)
                    })
                }
            })
            .catch(err => {
                console.error("Failed to remove like:", err.message);
            });
        console.log("data - hobe")
    };

    return (
        <div>
            <div className="card bg-base-100 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2">
                <figure>
                    <img
                        className='h-56 w-full object-cover object-center'
                        src={likeArtifact.artifactImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body bg-[#F5F1E8] text-[#3E1B0B]">
                    <h2 className="card-title">{likeArtifact.artifactName}</h2>
                    <p className="">
                        {likeArtifact.shortDescription.length > 120
                            ? likeArtifact.shortDescription.slice(0, 120) + "..."
                            : likeArtifact.shortDescription
                        }
                    </p>
                    <div className="card-actions justify-between items-center pt-5">
                        <div className='flex items-center gap-2'>
                            {/* <button onClick={handleLike} className=''>{isLike ? <IoMdHeart size={30} className='cursor-pointer' /> : <CiHeart size={30} className='cursor-pointer' />}</button> */}

                            <button onClick={() => handleLike(likeArtifact._id, likeArtifact.likeCount)} className=''>{toggle ? <IoMdHeart size={30} className='cursor-pointer' /> : <CiHeart size={30} className='cursor-pointer' />}</button>

                            {/* <p className='text-2xl'>{likes} <span className='text-sm'> Likes</span></p> */}
                            <span className='text-xl font-bold'> {likeArtifact.likeCount} <span className='text-sm'> Likes</span></span>
                        </div>
                        <Link to={`/artifact-detail/${likeArtifact._id}`}>
                            <button className="btn bg-[#3E1B0B] text-white"><IoEyeOutline />View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyLikesArtifacts;