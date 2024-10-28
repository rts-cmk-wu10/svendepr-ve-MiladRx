'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; 
import useFetch from '@/app/hooks/useFetch'; 
import BackHeader from '@/app/components/BackHeader';

function ClassDetails() {
  const params = useParams(); 
  const { id } = params; 

  const { data: classData, isLoading: isClassLoading, error: classError } = useFetch(`http://localhost:4000/api/v1/classes/${id}`);
  const { data: trainers, isLoading: isTrainersLoading, error: trainersError } = useFetch('http://localhost:4000/api/v1/trainers');

  const [isStored, setIsStored] = useState(false);

  useEffect(() => {
    const storedClass = localStorage.getItem(`class_${id}`);
    if (storedClass) {
      setIsStored(true);
    }
  }, [id]);

  const handleSignUpClick = () => {
    if (isStored) {
      localStorage.removeItem(`class_${id}`);
      setIsStored(false);
    } else {
      if (classData) {
        localStorage.setItem(`class_${id}`, JSON.stringify(classData));
        setIsStored(true);
      }
    }
  };


  if (!classData) {
    return <div>Class not found.</div>;
  }

  const { className, asset, trainer, classDescription, classDay, classTime } = classData;
  const trainerData = trainers?.find(t => t.id === trainer?.id) || trainer;

  return (
    <div className="h-screen flex flex-col bg-white" >
      <BackHeader />
      <div className="relative w-full h-[50vh] overflow-hidden">
        <img
          src={asset?.url || '/assets/demo.png'}
          alt={className}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-7 left-4 text-yellow-400">
          <h1 className="text-4xl mb-6 font-bold">{className}</h1>
          <div className="flex items-center mt-2">
            <div className="flex text-yellow-400">
              <span>★★★★★</span>
            </div>
            <span className="ml-2 font-semibold">5/5</span>
          </div>
        </div>
        <div className="absolute bottom-4 right-4">
          <button className="px-6 py-2 border-2 border-yellow-500 text-yellow-500 font-bold rounded-full hover:bg-yellow-500 hover:text-black transition">
            Rate
          </button>
        </div>
      </div>

      <div className="flex-grow p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">
            {classDay} - {classTime}
          </h3>
          <p className="text-base mb-6">{classDescription}</p>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mt-10 mb-4">Trainer</h3> 
            {trainerData ? (
              <div className="flex items-center space-x-4"> 
                <div className="w-20 h-20 rounded-md overflow-hidden">
                  <img
                    src={trainerData?.asset?.url || '/assets/trainer-placeholder.png'}
                    alt={trainerData?.trainerName}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-lg font-semibold">{trainerData?.trainerName}</p>
              </div>
            ) : (
              <p>Trainer information not available.</p>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`w-full max-w-[300px] py-4 mb-8 text-neutral-700 font-bold rounded-full shadow-lg ${isStored ? 'bg-yellow-500' : 'bg-yellow-500'}`}
            onClick={handleSignUpClick}
          >
            {isStored ? 'Remove' : 'Book'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassDetails;
