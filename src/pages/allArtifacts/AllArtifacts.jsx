import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import bannerImg from '../../assets/resources/story/breadcum-03.jpg'
import AllArtifactsCards from './AllArtifactsCards';
import SplineBanner from '../../components/banner/splineBanner';

const AllArtifacts = () => {
    const allArtifact = useLoaderData();

    const [searchText, setSearchText] = useState();

    const [searchArtifact, setSearchArtifact] = useState(allArtifact);

    const handleSearch = (e, text) => {
        e.preventDefault();
        if (text === "") return setSearchArtifact(allArtifact)
        const searchArtifacts = allArtifact.filter(artifact => artifact.artifactName.toLowerCase().includes(text));
        setSearchArtifact(searchArtifacts)
        console.log(searchArtifact)
    }


    return (
        <div>
            <title>Historical Artifacts | All Artifacts</title>
            <img src={bannerImg} alt="" className='h-100 w-full' />

            <div className='md:mx-15 xl:mx-64 my-30'>
                <h1 className='text-4xl md:text-6xl font-extrabold text-center text-[#3E1B0B] border-b border-[#3b1f00] w-fit mx-auto'>
                    ALL ARTIFACTS
                </h1>
                <form onSubmit={e => { handleSearch(e, searchText), setSearchText('') }} className="max-w-md my-12 mx-auto">
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-[#3E1B0B] dark:text-[#3E1B0B]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input value={searchText} onChange={e => setSearchText(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-[#3E1B0B] border border-[#3E1B0B] rounded-lg focus:outline-none dark:bg-[#FDF9ED] dark:border-[#3E1B0B]  dark:text-[#3E1B0B] " placeholder="Search Artifacts, Collections..." />
                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#3E1B0B] hover:bg-[#3E1B0B] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#3E1B0B] dark:hover:bg-[#3E1B0B] dark:focus:ring-[#3E1B0B] cursor-pointer">Search</button>
                    </div>
                </form>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10'>
                    {
                        searchArtifact.map(Artifacts => <AllArtifactsCards key={Artifacts._id} Artifacts={Artifacts} ></AllArtifactsCards>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllArtifacts;