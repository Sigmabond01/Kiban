import { Link } from "react-router-dom";
import BubbleChamberLogo from "../components/Logo";

function Header() {
  return (
    <header className="w-full px-6 py-4 bg-transparent absolute top-0 left-0 z-50 text-white font-noto">
      <div className="flex justify-between items-center font-noto">
        <BubbleChamberLogo />
      </div>
    </header>
  );
}

export default Header;