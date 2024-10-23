import React from 'react';
import Image from 'next/image';

const TrainerComponent = ({ trainers }) => {
  return (
    <div className="max-w-lg mx-auto"> 
      <h2 className="text-2xl font-bold mb-4 mt-9">Popular Trainers</h2>
      <div className="overflow-y-auto max-h-[300px]"> 
        {trainers.map((trainer) => (
          <div key={trainer.id} className="flex items-center mb-6">
         
            <div className="w-20 h-20 rounded-2xl overflow-hidden mr-4 ">
              <Image
                src={trainer.asset.url}
                alt={trainer.trainerName}
                width={80}  
                height={80}
                className="object-cover"
              />
            </div>
           
            <div>
              <h4 className="text-1xl font-bold">{trainer.trainerName}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainerComponent;
