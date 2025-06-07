// Hero.jsx
import AboutButton from "./AboutButton";

const Hero = () => {
  return (
    <div className="bg-[url('/src/assets/background1.png')] bg-cover bg-center h-screen w-screen overflow-hidden
     flex flex-col items-center justify-center text-center font-noto font-bold">
      <h1 className="text-9xl font-bold text-slate-700">KIBAN</h1>
      <h2 className="text-6xl font-bold text-slate-700 mb-10">起盤</h2>
      <p className="text-3xl mt-6 text-white">Learn Japanese from the foundation up.</p>
      <p className="text-3xl mt-2 mb-6 text-white font-bold">基礎から日本語を築き上げよう。</p>
      <AboutButton />
    </div>
  );
};

export default Hero;
