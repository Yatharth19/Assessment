import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import Navbar from './components/Navbar';
import Cities from './components/Cities';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/users1' element={<Users url="/users1" />} />
          <Route exact path='/users2' element={<Users url="/users2" />} />
          <Route exact path='/users3' element={<Users url="/users3" />} />
          <Route exact path='/users4' element={<Users url="/users4" />} />
          <Route exact path='/cities' element={<Cities url="/cities" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
