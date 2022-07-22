
import Card from 'react-bootstrap/Card';
import SpecialCard from './SpecialCard';
import './App.scss';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


function Specials({special, sides}) {

    const renderSpecials = (itemArray) => {
        return special.map(item => <SpecialCard key={item.id} item={item} />)
    }

    const renderSides = (sideList) => {
        return sides.map(side => <ListGroupItem key={side.id} width='30px'>{side.item}</ListGroupItem>)
    }
    
    return (
        <div id='special-formatting'>
            <h1>load</h1>
            <div id='special-list'>
                <h1 className='headings'>Family Specials</h1>
                <div className='menu-cards'>
                    {renderSpecials(special)}
                </div>  
            </div>

            <div id='side-list'>
                <h1 className='headings'>Side Choices</h1>
                <ListGroup variant='flush'>
                    {renderSides(sides)}
                </ListGroup>
                <h4>Prices for sides:</h4>
                <p>Small: $5.95 / Large $7.95</p>
            </div>
            
        </div>
    )
}

export default Specials;