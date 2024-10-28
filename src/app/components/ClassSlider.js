import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ClassSlider = ({ classes }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">
        Classes for you
      </h2>
      <div className="flex space-x-4 overflow-x-scroll no-scrollbar">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className="relative w-[130px] h-[145px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
          >
            <Link href={`/details/${classItem.id}`}>
              <Image
                src={classItem.asset.url}
                alt={classItem.className}
                layout="fill"
                className="absolute top-0 left-0 w-full h-full object-cover" 
              />
            </Link>

            <div
              className="absolute bottom-0 w-full bg-yellow-500 text-black px-3 py-2 flex justify-center items-center h-[45px] rounded-tr-[30px]"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <h4 className="font-bold text-[12px] text-center">{classItem.className}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClassSlider;
