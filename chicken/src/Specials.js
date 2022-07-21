
import Card from 'react-bootstrap/Card';
import SpecialCard from './SpecialCard';

function Specials({special}) {

    const renderSpecials = (itemArray) => {
        return special.map(item => <SpecialCard key={item.id} item={item} />)
    }
    
    return (
        <div>
            <h1>load</h1>
            <div id='special-list'>
                <h1 className='headings'>Family Specials</h1>
                {renderSpecials(special)}
            </div>
        </div>
    )
}

export default Specials;