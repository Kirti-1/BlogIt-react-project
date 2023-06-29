import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'


export function BlogNavbar(props){


    return(
        <Navbar expand="lg" className="bg-body-tertiary navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor: '#e3f2fd'}}>
      <Container>
        
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            
            <Nav.Link className='nav-item' href="/create-post">Create Post</Nav.Link>
            
          </Nav>
      </Container>
    </Navbar>
    )
}