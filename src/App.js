// dep
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";

// bootstrap
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// pages&component
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

// utils
import { Store } from './store';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <div className="d-flex flex-column site-container">
      {/* header */}
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            {/* brand */}
            <LinkContainer to="/">
              <Navbar.Brand>amazona</Navbar.Brand>
            </LinkContainer>

            <Nav className='me-auto'>
              <Link to='/cart' className='nav-link'>
                Cart
                {cart?.cartItems?.length > 0 && (
                  <Badge pill bg='danger'>
                    {cart.cartItems.reduce((acc, cur) => acc + cur.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>

      {/* main section */}
      <main>
        <Container className='mt-3'>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path='/cart' element={<CartScreen />} />
          </Routes>
        </Container>
      </main >

      {/* footer */}
      <footer>
        <div className="text-center">All rights reserved</div>
      </footer>
    </div >
  );
}

export default App;
