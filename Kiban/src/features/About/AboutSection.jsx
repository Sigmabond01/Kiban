import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="min-h-screen bg-white">
      <header className="w-full px-6 py-4 bg-transparent relative top-0 left-0 z-50 text-gray-900">
        <div className="flex justify-between items-center">
          <nav className="ml-auto space-x-8 font-Noto Sans JP">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/About/N5" className="hover:underline">JPLT N5</Link>
              <Link to="/About/N4" className="hover:underline">JPLT N4</Link>
          </nav>
        </div>
      </header>

      <main className="pt-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">About Kiban</h1>
          <p className="text-lg text-gray-700 text-center">
            Choose your Japanese learning level to get started.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutSection;