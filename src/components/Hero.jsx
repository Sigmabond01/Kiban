import AboutSection from "../features/About/AboutSection";
import AboutButton from "./AboutButton";

const Hero = () => {

  const Link = ({ to, children, className = "" }) => (
  <a href={to} className={className}>{children}</a>
);


  return (
    <div>
    <div className="relative w-full overflow-hidden font-noto">
      <div className="absolute inset-0 bg-[url('/src/assets/background1.webp')] bg-cover bg-center z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/100 z-10" />

        <header className="w-full px-0 py-4 absolute top-4 left-20 z-30">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    <nav className="ml-auto flex items-center font-noto space-x-6">
      <Link
        to="/login"
        className="text-white/90 hover:text-orange-400 transition-colors font-medium"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="px-4 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
      >
        Register
      </Link>
    </nav>
  </div>
</header>
      
      <div className="relative z-20 flex flex-col min-h-screen justify-between">
        <div className="flex flex-col items-center justify-center text-center px-4 pt-24">
          <div className="mb-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-gray-800 to-slate-800 bg-clip-text text-transparent">
            <h1 className="text-9xl font-light">KIBAN</h1>
            <h2 className="text-6xl mb-10 font-bold">起盤</h2>
          </div>
          <p className="text-3xl mt-6 text-white font-light">Learn Japanese from the foundation up.</p>
          <p className="text-3xl mt-2 mb-6 text-white font-medium">基礎から日本語を築き上げよう。</p>
          <AboutButton />
        </div>
      </div>
    </div>
    <div>
      <AboutSection />
    </div>
    </div>
  );
};

export default Hero;