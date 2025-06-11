import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { Analytics } from "@vercel/analytics/next"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <AppRoutes />
        <Analytics/>
      </Router>
    </div>
  );
}

export default App;
