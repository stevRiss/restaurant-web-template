import {Navbar, Nav, NavDropdown, Button, Container} from 'react-bootstrap';
import './App.scss'


import { useNavigate } from 'react-router';

function NavBar(){
    const navigate= useNavigate();
  
    const handleHome = () => {
        navigate('/', {replace:true})
    }

    const handleContact = () => {
        navigate('/contact', {replace:true})

    }

    const handleSpecials = () => {
        navigate('/specials', {replace:true})

    }

    return (

            <Navbar fixed='top' expand='sm' collapseOnSelect bg='dark'>
                <Container>
                   
                    <div id='homepage' onClick={handleHome}>Chickens Road</div>
                    
                    <Navbar.Toggle />
                    
                    <Nav>
                        <Nav.Item>
                            <Nav.Link onClick={handleSpecials}>Family Specials</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link onClick={handleContact}>Contact Us!</Nav.Link>
                        </Nav.Item>
                        
                        <NavDropdown title='More' id='drop'>
                            <NavDropdown.Item href='https://www.linkedin.com/in/stephenrisso'>Photo gallery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://github.com/stevRiss'>Catering</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://medium.com/@stevriss22'>Awards</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default NavBar