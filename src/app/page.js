import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="relative h-3/5">
        <Image
          src="/assets/welcome.jpg"
          alt="Person"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-16 left-6 text-left">
          <h1 className="font-bold text-[52px] leading-none" style={{ color: '#F1C40E' }}>
            Believe Yourself
          </h1>
          <h2 className="font-semibold text-[24px] text-white mt-1 pl-1">
            Train like a pro
          </h2>
        </div>
      </div>

      <div className="relative h-2/5 flex justify-center items-center bg-black">
        <Image
          src="/assets/center.jpg"
          alt="Person Training"
          fill
          className="object-cover opacity-40"
        />
        <a
          href="/home"  
          className="absolute text-black font-semibold py-4 px-12 rounded-full shadow-lg text-lg transition hover:bg-yellow-600"
          style={{ backgroundColor: '#F1C40E', bottom: '30px' }}
        >
          Start Training
        </a>
      </div>
    </div>
  );
}
