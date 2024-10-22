'use client';
import React from 'react';
import ClassSlider from '../components/ClassSlider'; 
import Image from 'next/image';
import Header from '../components/Header';
import useFetch from '../hooks/useFetch'; 

const Home = () => {
  const { data: classes, isLoading, error } = useFetch('http://localhost:4000/api/v1/classes');
  

  const randomClass = classes ? classes[Math.floor(Math.random() * classes.length)] : null;


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white min-h-screen p-4">
      <Header />

    
      {randomClass && (
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-[450px] rounded-lg overflow-hidden shadow-lg">
          
            <div className="w-full h-[540px] z-0">
              <Image
                src={randomClass.asset.url}
                alt={randomClass.className}
                layout="fill"
                objectFit="cover"
                className="absolute w-full h-full"
              />
            </div>

            <div className="bg-yellow-500 text-black px-6 py-3 flex justify-center items-center h-[70px] w-[260px] rounded-tr-[30px] z-10 -mt-10 relative">
              <h4 className="font-bold text-[18px] text-center">{randomClass.className}</h4>
            </div>
          </div>
        </div>
      )}

      <ClassSlider classes={classes} />
    </div>
  );
};

export default Home;
