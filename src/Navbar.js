import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


export function BlogNavbar(props){


    return(
        <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <br/>
            <Nav.Link className='nav-item' href="/create-post">create Post</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
    )
}