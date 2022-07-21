import './App.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useEffect, useState} from 'react';
import MenuCards from './MenuCards';

function Home(){
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/db.json").then(r => r.json().then(d => {
            setMenuItems(d.menu);
            
        }))
    }, [])

    const renderCards = (items) => {
         return menuItems.map(item => <MenuCards key={item.id} item={item} />);
    }

    const handleChicken = () =>{

    }
    return (
        <>
        <h1>...</h1>
        <header>
            <h1 id='welcome'>Road of Chicken</h1>
            <h2 id='welcome-subtext'>"We admit it, we're chickens!"</h2>
            <div id='best-chik'>The BEST rotisserie chicken on long island.</div>
        </header>

        <div id='about-us'>
            <h1 className='headings'>About us...</h1>
            <p>Us here at Road of Chicken pride ourselves in our food. We are not just a Venezuelan Latin Food Restaurant, we are tthe best one in Long Island. We serve quality and delicious food that will surely satisfy your taste buds </p>
        </div>

        <div id='menu'>
            <h1 className='headings'>Menu</h1>
            <div id='menu-cards'>
                {renderCards(menuItems)}
            </div>
        </div>

        <div id='location-and-hours'>
            <h1 className='headings'>Location and hours of operation</h1>
            <p>Open Monday - Saturday 1:00PM - 7:30PM</p>
            <p>Located at 2000 MERRICK ROAD BELLMORE, NY 11710  </p>
            <img src='https://maps.googleapis.com/maps/api/staticmap?center=Bellmore,NY&zoom=13&size=400x400&key=urkey'/>
        </div>

        <div id='contact-us'>
            <h1 className='headings'>Order Now!</h1>
            <h2>Takeout or Delivery!</h2>
            <p>Phone: 516-222-2222</p>
        </div>
        </>
    )
}

export default Home;