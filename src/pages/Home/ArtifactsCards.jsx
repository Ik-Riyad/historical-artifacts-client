import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router';


const ArtifactsCards = ({ artifact }) => {
    const {_id, artifactName, artifactImage, shortDescription, likeCount } = artifact;


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
                        <Link to='/all-artifacts'>
                            <CiHeart size={30} className='cursor-pointer' />
                        </Link>
                        <p className='text-2xl'>{likeCount} <span className='text-sm'>Likes</span></p>
                    </div>
                    <Link to={`/artifact-detail/${_id}`}>
                        <button className="btn bg-[#3E1B0B] text-white"><IoEyeOutline />View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ArtifactsCards;