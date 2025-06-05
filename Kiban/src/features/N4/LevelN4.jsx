import { useNavigate } from "react-router-dom";

function LevelN4() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 pt-20">
      <h1 className="text-3xl font-bold mb-4">JPLT N4</h1>
      <p className="text-lg mb-6">Your Level N4 journey starts here!</p>
      <button 
        onClick={() => navigate("/")}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Go back to Home
      </button>
    </div>
  );
}

export default LevelN4;