import AboutButton from "./AboutButton";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="relative w-screen overflow-hidden font-noto">
      <div className="absolute inset-0 bg-[url('/src/assets/background1.webp')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-80 z-10" />
      
      <div className="relative z-20 flex flex-col min-h-screen justify-between">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-24">
          <div className="mb-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-950 to-slate-800 bg-clip-text text-transparent">
            <h1 className="text-9xl font-light">KIBAN</h1>
            <h2 className="text-6xl mb-10 font-bold">起盤</h2>
          </div>
          <p className="text-3xl mt-6 text-white font-light">Learn Japanese from the foundation up.</p>
          <p className="text-3xl mt-2 mb-6 text-white font-medium">基礎から日本語を築き上げよう。</p>
          <AboutButton />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Hero;