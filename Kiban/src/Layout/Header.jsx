import { Link } from "react-router-dom";
import BubbleChamberLogo from "../components/Logo";

function Header() {
  return (
    <header className="w-full px-6 py-4 bg-transparent absolute top-0 left-0 z-50 text-white">
      <div className="flex justify-between items-center">
        <BubbleChamberLogo />
        <nav className="ml-auto space-x-8 font-Noto Sans JP">
          <Link to="/About" className="hover:underline">Explore Here</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;