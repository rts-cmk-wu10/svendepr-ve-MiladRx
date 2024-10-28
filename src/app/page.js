import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
     
      <div className="relative h-1/2 overflow-hidden">
        <Image
          src="/assets/welcome.jpg"
          alt="Person"
          fill
          className="object-cover object-center"
          style={{ objectPosition: 'top center' }} 
        />
        <div className="absolute ml-3 bottom-8 left-6 text-left">
          <h1
            className="font-bold leading-none"
            style={{ color: '#F1C40E', fontSize: '60px', lineHeight: '1.0' }}
          >
            Believe <br /> Yourself
          </h1>
          <h2 className="font-semibold text-[22px] text-white mt-2">
            Train like a pro
          </h2>
        </div>
      </div>

      <div className="relative h-1/2 flex justify-center items-center bg-black overflow-hidden">
        <Image
          src="/assets/center.jpg"
          alt="Person Training"
          fill
          className="object-cover opacity-50 object-center"
          style={{ objectPosition: 'center' }} 
        />
        <a
          href="/home"
          className="absolute text-black font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition hover:bg-yellow-600"
          style={{
            backgroundColor: '#F1C40E',
            bottom: '40px',
            color: '#000',
            fontSize: '18px'
          }}
        >
          START TRAINING
        </a>
      </div>
    </div>
  );
}
