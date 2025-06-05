const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/background1.png')] bg-cover bg-center h-screen w-screen overflow-hidden">
      <div className="pt-20">
        <h1 className="text-9xl font-bold mt-4 mb-2 flex justify-center items-center text-slate-700 font-noto">
          KIBAN
        </h1>
        <h2 className="text-6xl mt-2 flex justify-center items-center font-noto font-bold text-slate-700"> 起盤 </h2>
        <p className='flex justify-center items-center text-white text-3xl mt-4 mb-2 text-white pt-20'>
          Learn Japanese from the foundation up.
        </p>
        <p className='flex justify-center items-center text-white text-3xl mt-4 mb-2 text-white font-bold'>
          基礎から日本語を築き上げよう。
        </p>
      </div>
    </div>
  );
};

export default Hero;