import './App.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Home(){
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
            <h1 class='headings'>About us...</h1>
            <p>Us here at Road of Chicken pride ourselves in our food. We are not just a Venezuelan Latin Food Restaurant, we are tthe best one in Long Island. We serve quality and delicious food that will surely satisfy your taste buds </p>
        </div>

        <div id='menu'>
            <h1 class='headings'>Menu</h1>
            <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src="https://assets.website-files.com/55b5aac889f079d03037f328/5625cd71c012a59a5449448e_ChickenNY.jpg" alt="Rotisserie Chicken Bellmore"/>
                <Card.Body>
                    <Card.Title>Chicken</Card.Title>
                    <Card.Text>Award Winning rotisserie chicken!</Card.Text>
                </Card.Body>
                <Button variant='primary' onClick={handleChicken}>Chik menu</Button>
            </Card>
        </div>
        </>
    )
}

export default Home;