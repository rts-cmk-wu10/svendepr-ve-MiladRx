"use client";
import React from 'react';
import Link from 'next/link';

const ClassScheduleCard = ({ id, className, classDay, classTime }) => {
  return (
    <Link href={`/details/${id}`} passHref>
      <div className="border rounded-lg p-4 mb-4 shadow-sm border-gray-300 cursor-pointer hover:shadow-md transition-shadow">
        <h2 className="text-2xl font-bold mb-4">{className}</h2>
        <p className="font-bold">{`${classDay} – ${classTime}`}</p>
      </div>
    </Link>
  );
};

export default ClassScheduleCard;
