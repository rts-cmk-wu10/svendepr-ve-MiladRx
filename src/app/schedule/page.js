"use client";
import React from 'react';

import Header from '../components/Header';

const Schedule = () => {
  return (
    <div className="p-6 font-sans">
    
        <Header />

     
      <div className="border rounded-lg p-4 mb-6 shadow-md">
        <h2 className="text-xl font-bold">Yoga Flow Workout</h2>
        <p className="text-gray-600">Monday - 19.30</p>
      </div>

  
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold">Lower Abs Workout</h2>
        <p className="text-gray-600">Wednesday - 17.00</p>
      </div>
    </div>
  );
};

export default Schedule;
