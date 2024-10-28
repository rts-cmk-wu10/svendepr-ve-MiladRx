import React from 'react';
import Image from 'next/image';

const TrainerComponent = ({ trainers }) => {
  return (
    <div className="mt-5 max-w-lg mx-auto"> 
      <h2 className="text-2xl font-bold mb-4 mt-9">Popular Trainers</h2>
      <div className="overflow-y-auto "> 
        {trainers.map((trainer) => (
          <div key={trainer.id} className="flex items-center mb-6">
         
            <div className="w-24 h-24 rounded-2xl overflow-hidden mr-4 ">
              <Image
                src={trainer.asset.url}
                alt={trainer.trainerName}
                width={100}  
                height={100}
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
