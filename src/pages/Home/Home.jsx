import React, { Suspense } from 'react';
import Slider from '../../components/banner/Slider';
import Artifacts from './Artifacts';
import Sections from './Sections';
import ScrollFloat from '../../../Reactbits/ScrollFloat/ScrollFloat';
import Loader from '../../components/Loader';

const artifactsPromise = fetch('https://historical-artifact-server.vercel.app/artifacts').then(res => res.json());
const Home = () => {

    return (
        <div>
            <title>Historical Artifacts | Home</title>

            <section>
                <Slider />
            </section>

            <section className='md:mx-15 xl:mx-64 mb-20'>
                <div className='text-8xl font-extrabold mt-30 mb-10 text-center text-[#3E1B0B] border-b border-[#3b1f00] w-fit mx-auto'>
                    <ScrollFloat
                        animationDuration={1}
                        ease='back.inOut(2)'
                        scrollStart='center bottom+=50%'
                        scrollEnd='bottom bottom-=40%'
                        stagger={0.03}
                    >
                        ARTIFACTS
                    </ScrollFloat>
                </div>
                <Suspense fallback={<Loader/>}>
                    <Artifacts artifactsPromise={artifactsPromise} />
                </Suspense>
            </section>

            <Sections></Sections>



        </div>

    );
};

export default Home;