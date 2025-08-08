import React, { useEffect, useState } from 'react';
import { } from '@react-three/fiber';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { TbListDetails } from "react-icons/tb";
import { FaUserEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';
import bannerImg from '../../assets/resources/story/story.jpg'
import { motion } from 'framer-motion';
import axios from 'axios';
import noDataLottie from '../../assets/lotties/nodata.json';
import Lottie from 'lottie-react';

const MyArtifacts = () => {
    const { user } = useAuth();

    const [myArtifactsData, setMyArtifactsData] = useState([]);

    // console.log(myArtifactsData)
    useEffect(() => {
        axios.get(`https://historical-artifact-server.vercel.app/my-artifacts?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        }).then((res) => {
            const artifact = res.data;
            setMyArtifactsData(artifact);
        })
    }, [user?.email, user?.accessToken])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result)
            if (result.isConfirmed) {
                fetch(`https://historical-artifact-server.vercel.app/artifacts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remainingArtifacts = myArtifactsData.filter(plant => plant._id != id);
                            setMyArtifactsData(remainingArtifacts)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Data Has Been Deleted Successfully.",
                                icon: "success"
                            })
                        }
                    })
            }
        });

    }

    return (

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <title>Historical Artifacts | My Artifacts</title>

            <img src={bannerImg} alt="" className='h-100 w-full' />


            {
                myArtifactsData && myArtifactsData.length > 0 ?
                    (<div className="my-14 px-4 lg:px-0 lg:mx-auto max-w-screen-lg">
                        <h1 className='text-4xl md:text-5xl font-bold text-center pb-10 text-[#3E1B0B]'>My Artifacts</h1>
                        <div className="overflow-x-auto shadow-md rounded-lg">
                            <table className="table w-full text-center">
                                <thead className='text-lg md:text-xl bg-[#F5F1E8] text-[#3E1B0B]'>
                                    <tr>
                                        <th className='py-3 md:py-4 text-left pl-6'>Artifact Name</th>
                                        <th className='py-3 md:py-4'>Type</th>
                                        <th className='py-3 md:py-4'>Discovered At</th>
                                        <th className='py-3 md:py-4'>Actions</th>
                                    </tr>
                                </thead>

                                {myArtifactsData?.map(myArtifacts => (
                                    <tbody key={myArtifacts._id} className='text-base md:text-lg hover:bg-[#FFF7EC] transition duration-300'>
                                        <tr>
                                            <td className="py-3 md:py-4 text-left pl-6">
                                                <div className="flex items-center gap-2 md:gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 w-12 md:h-14 md:w-14">
                                                            <img src={myArtifacts.artifactImage} alt="Artifact" className="object-cover" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold max-w-[150px] md:max-w-full break-words">{myArtifacts.artifactName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-3 md:py-4">{myArtifacts.artifactType}</td>
                                            <td className="py-3 md:py-4">{myArtifacts.discoveredAt}</td>
                                            <td className='py-3 md:py-4'>
                                                <div className='flex justify-center gap-4 md:gap-6'>
                                                    <div className="relative group">
                                                        <Link to={`/artifact-detail/${myArtifacts._id}`} className='text-green-600 hover:scale-110 transition duration-200'>
                                                            <TbListDetails size={24} />
                                                        </Link>
                                                        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-[#3E1B0B] text-white text-xs rounded px-2 py-1 whitespace-nowrap">View Detail</span>
                                                    </div>
                                                    <div className="relative group">
                                                        <Link to={`/update/${myArtifacts._id}`} className='text-blue-600 hover:scale-110 transition duration-200'>
                                                            <FaUserEdit size={24} />
                                                        </Link>
                                                        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-[#3E1B0B] text-white text-xs rounded px-2 py-1 whitespace-nowrap">Update</span>
                                                    </div>
                                                    <div className="relative group">
                                                        <Link onClick={() => handleDelete(myArtifacts._id)} className='text-red-600 hover:scale-110 transition duration-200'>
                                                            <FaDeleteLeft size={24} />
                                                        </Link>
                                                        <span className="absolute bottom-full mb-2 hidden group-hover:block bg-[#3E1B0B] text-white text-xs rounded px-2 py-1 whitespace-nowrap">Delete</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                            </table>
                        </div>
                    </div>)
                    :
                    (
                        <div className='my-20'>
                            <h2 className='text-5xl font-extrabold mt-30 mb-10 text-center text-[#FF5A5F] border-b border-[#FF5A5F] w-fit mx-auto pb-5'>
                                You have not created any artifacts yet.
                            </h2>
                            <Lottie style={{ width: "500px", margin: "0px auto" }} animationData={noDataLottie} loop={true} />

                        </div>

                    )
            }


        </motion.div>
    );
};

export default MyArtifacts;