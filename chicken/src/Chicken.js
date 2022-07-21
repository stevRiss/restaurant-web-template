import './App.scss';
import {useState}  from 'react';
import Button from 'react-bootstrap/Button';

function Chicken(){
    const [data, setData] = useState([]);

    const handleClick = () => {
     
            fetch("http://localhost:3000/db.json").then(r => r.json()).then(info => setData(info))
            return console.log(data)
        
    }
    return(
        <div>
            <h1>sj</h1>
            <Button onClick={handleClick}>HELLOo</Button>
        </div>
    )
}

export default Chicken;