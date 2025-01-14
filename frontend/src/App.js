import logo from './logo.svg';
import './App.css';
import SignIn_Up from './components/SignIn_Up';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Forums from './components/Forums';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn_Up />} />
          <Route path= "/forum" element= {<Forums />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;