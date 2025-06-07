import { useNavigate } from "react-router-dom";

function AboutButton() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center mt-16">
            <button 
                onClick={() => navigate("/About")}
                className="group relative px-16 py-6 bg-gradient-to-r from-orange-400/20 to-red-500/20 backdrop-blur-sm text-white border border-white/40 rounded-2xl hover:from-orange-400/30 hover:to-red-500/30 hover:border-white/60 hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 font-light text-lg tracking-wide"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/10 to-red-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <span className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl">始</span>
                    <span>Start here</span>
                    <span className="text-2xl">→</span>
                </span>
            </button>
        </div>
    );
}

export default AboutButton;