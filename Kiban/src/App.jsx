import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AboutContent from './features/About/AboutContent';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;

