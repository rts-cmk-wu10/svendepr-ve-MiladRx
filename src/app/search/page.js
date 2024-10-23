'use client';
import React from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 
import BackHeader from '../components/BackHeader';
import ClassSlider from '../components/ClassSlider'; 
import TrainerComponent from '../components/TrainerComponent'; 
import useFetch from '../hooks/useFetch'; 

const SearchPage = () => {
 
  const { data: classes, isLoading: loadingClasses, error: errorClasses } = useFetch('http://localhost:4000/api/v1/classes');
  const { data: trainers, isLoading: loadingTrainers, error: errorTrainers } = useFetch('http://localhost:4000/api/v1/trainers');

  return (
    <div className="min-h-screen p-4 bg-white">

      <BackHeader />

  
      <div className="flex mb-9 items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
        <FiSearch className="text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search classes"
          className="ml-2 w-full bg-transparent focus:outline-none text-gray-600"
        />
      </div>

      {loadingClasses || loadingTrainers ? (
        <p>Loading...</p>
      ) : errorClasses || errorTrainers ? (
        <p>Error: {errorClasses || errorTrainers}</p>
      ) : (
        <>
         
          {classes && <ClassSlider classes={classes} />}

        
          {trainers && <TrainerComponent trainers={trainers} />}
        </>
      )}
    </div>
  );
};

export default SearchPage;
