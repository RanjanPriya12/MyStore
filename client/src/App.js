import { Footer } from "./components/Footer";
import { Container } from 'react-bootstrap';
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Route, Routes } from 'react-router-dom';
import { ProductDetail } from "./components/ProductDetail";


const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/products/:id" element={<ProductDetail/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
      </>
      
  );
};

export default App;
