import React from 'react';

const Banner = () => {
  return (

    <div className='relative'>
      <div className='absolute pl-4 md:pl-16 lg:pl-32 bottom-1/2 '>
        <h1 className='text-6xl text-center  text-white '>Lorem ipsum dolor sit amet.</h1>
        <button className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
      <video className='h-screen w-full object-cover' src={require('../../assets/bannerVideo.mp4')} autoPlay muted loop />
    </div>

  );
};

export default Banner;
