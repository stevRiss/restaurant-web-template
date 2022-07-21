import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function SpecialCard({item}){
    return (
        <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={item.img} alt={item.name}/>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.price}</Card.Text>
                </Card.Body>
        </Card>
    )
}

export default SpecialCard;