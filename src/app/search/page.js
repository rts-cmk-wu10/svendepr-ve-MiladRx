"use client";
import React from 'react';
import { FiArrowLeft, FiSearch } from 'react-icons/fi'; 
import BackHeader from '../components/BackHeader';
import ClassSlider from '../components/ClassSlider'; 
import useFetch from '../hooks/useFetch'; 

const SearchPage = () => {
  const { data: classes, isLoading, error } = useFetch('http://localhost:4000/api/v1/classes');

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

      {isLoading && <p>Loading classes...</p>}
      {error && <p>Error: {error}</p>}

      {classes && <ClassSlider classes={classes} />}
    </div>
  );
};

export default SearchPage;
