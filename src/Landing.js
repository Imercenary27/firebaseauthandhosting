import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CardLayout} from './Card';
import Slider from './Carousal';
import './Landing.css'

export function NavbarStyle() {
  return (
    <div className='wholeback' style={{background:'rgb(19,127,127)'}}>
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" style={{color:'white'}}>Customer Portal: {localStorage.getItem('user')}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
            <Nav.Link href=""style={{color:'white'}}>Home</Nav.Link>
            <Nav.Link href="" style={{color:'white'}}>Write To Us</Nav.Link>
            <NavDropdown bg="light" style={{color:'white'}} title="Products" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3" >Enter Product</NavDropdown.Item>
              <NavDropdown.Item href="#action4" >
               Old Product
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" >
               New Product
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          
            <Button variant="outline-success" style={{color:'white'}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Slider/>
<div className='makecenter'>
<CardLayout/>
    <CardLayout/>
    <CardLayout/>
</div>
<br/>
<input type="text" placeholder="product name"

>
</input>
<br>
</br>
<input type="text" placeholder="product rating">
</input>
<input type="file" accept="image/*" />
<br/>
<button type="primary" style={{background:'green'}}>
  Submit The Response
</button>
    

    
    </div>
  );
}

export default NavbarStyle;