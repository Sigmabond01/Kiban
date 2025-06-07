import { useNavigate } from "react-router-dom";

function AboutButton() {
    const navigate = useNavigate();

    return (

	<button onClick={() => navigate("/About")}
    className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Start Here!
    </button>
    );
}

export default AboutButton;