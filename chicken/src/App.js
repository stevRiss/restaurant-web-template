import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Chicken from './Chicken';
import NavBar from './NavBar';
import Contact from './Contact';
import Specials from './Specials';
import {useEffect, useState} from 'react';
import ContactInfo from './ContactInfo';


function App() {
  const [menuItems, setMenuItems] = useState([])
  const [special, setSpecials] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/db.json").then(r => r.json().then(d => {
        setMenuItems(d.menu);
        setSpecials(d.specials)
    }))
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      
      
          <Routes>
            <Route path='/' element={<Home menuItems={menuItems} />} />
            <Route path='/chicken' element={<Chicken />} />
            <Route path='/specials' element={<Specials special={special}/>}/>
            <Route path='/contact' element={<Contact />}/>
          </Routes>

          <ContactInfo />
      
    </div>
  );
}

export default App;
