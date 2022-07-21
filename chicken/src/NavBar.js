import {Navbar, Nav, NavDropdown, Button, Container} from 'react-bootstrap';
import './App.scss'


import { useNavigate } from 'react-router';

function NavBar(){
    const navigate= useNavigate();
  
    const handleHome = () => {
        navigate('/', {replace:true})
    }

    return (

            <Navbar fixed='top' expand='sm' collapseOnSelect bg='dark'>
                <Container>
                   
                    <div id='homepage' onClick={handleHome}>Chickens Road</div>
                    
                    <Navbar.Toggle />
                    
                    <Nav>
                        <Nav.Item>
                            <Nav.Link>PORTFOLIO!</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link>RESUME</Nav.Link>
                        </Nav.Item>
                        
                        <NavDropdown title='Links' id='drop'>
                            <NavDropdown.Item href='https://www.linkedin.com/in/stephenrisso'>LinkedIn</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://github.com/stevRiss'>Github</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href='https://medium.com/@stevriss22'>Medium</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>
    )
}

export default NavBar