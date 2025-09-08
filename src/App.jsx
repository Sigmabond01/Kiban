import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
