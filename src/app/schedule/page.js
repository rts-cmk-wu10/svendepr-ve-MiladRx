"use client";
import React, { useEffect, useState } from 'react';
import BackHeader from '../components/BackHeaderGrey';
import ClassScheduleCard from '../components/ClassScheduleCard';

const Schedule = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    
    const storedClasses = [];
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith('class_')) {
        const classData = JSON.parse(localStorage.getItem(key));
        storedClasses.push(classData);
      }
    });
    setClasses(storedClasses);
  }, []);

  return (
    <div className="p-6 " style={{ fontFamily: 'var(--font-poppins)' }}>
      <BackHeader />
      <h1 className="text-2xl ml-7 -mt-3 pb-6 ">My Schedule</h1>

      {classes.length > 0 ? (
  classes.map((classItem, index) => (
    <ClassScheduleCard
      key={classItem.id || index} 
      id={classItem.id || index}  
      className={classItem.className}
      classDay={classItem.classDay}
      classTime={classItem.classTime}
    />
  ))
) : (
  <p className="text-gray-500 mt-4">No classes scheduled.</p>
)}

    </div>
  );
};

export default Schedule;
