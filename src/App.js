import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
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

          </Container>
        </Navbar>
      </header>

      {/* main section */}
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path="/product/:slug" element={<ProductScreen />} />
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
