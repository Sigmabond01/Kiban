import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
