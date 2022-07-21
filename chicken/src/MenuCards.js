import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './App.scss';

function MenuCards({item}){
    return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={item.img} alt={item.name}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                </Card.Body>
                <Button variant='primary'>menu</Button>
            </Card>
    )
}

export default MenuCards;