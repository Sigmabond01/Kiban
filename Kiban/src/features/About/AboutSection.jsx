import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <header className="w-full px-6 py-4 bg-transparent absolute top-0 left-0 z-50 text-gray-900">
      <div className="flex justify-between items-center">
        <nav className="ml-auto space-x-8 font-Noto Sans JP">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/About/N5" className="hover:underline">JPLT N5</Link>
            <Link to="/About/N4" className="hover:underline">JPLT N4</Link>
        </nav>
      </div>
    </header>
  );
}

export default AboutSection;
