import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Chicken from './Chicken';
import NavBar from './NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      
      
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chicken' element={<Chicken />} />
          </Routes>
      
    </div>
  );
}

export default App;
