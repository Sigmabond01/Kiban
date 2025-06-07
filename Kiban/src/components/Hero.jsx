import AboutButton from "./AboutButton";

const Hero = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden font-noto">
      <div className="absolute inset-0 bg-[url('/src/assets/background1.png')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center font-bold px-4">
        <h1 className="text-9xl text-slate-700">KIBAN</h1>
        <h2 className="text-6xl text-slate-700 mb-10">起盤</h2>
        <p className="text-3xl mt-6 text-white font-light">Learn Japanese from the foundation up.</p>
        <p className="text-3xl mt-2 mb-6 text-white font-normal">基礎から日本語を築き上げよう。</p>
        <AboutButton />
      </div>

    </div>
  );
};

export default Hero;
