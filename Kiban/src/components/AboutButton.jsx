import { useNavigate } from "react-router-dom";

function AboutButton() {
    const navigate = useNavigate();

    return (
    <div className="flex items-center justify-center mt-12">
	 <button onClick={() => navigate("/About")}
     className="px-12 py-5 bg-white/20 text-white border border-white/30 rounded-full
      hover:bg-white/30 hover:scale-105 transition-all duration-300 font-medium shadow-lg">
     Start Here!
     </button>
    </div>
    );
}

export default AboutButton;