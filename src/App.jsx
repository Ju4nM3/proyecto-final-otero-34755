import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css';
import Header from './components/content/Header';
import ItemListContainer from './components/content/ItemListContainer'
import Category from './components/content/Category';
import Product from './components/content/Product'
import Cart from './components/content/Cart'
import About from './components/content/About'
import Contact from './components/content/Contact'
import Footer from './components/content/Footer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:id" element={<Category/>} />
          <Route path="/product/:id" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer/>    
      </BrowserRouter>
    </>
  );
}

export default App;
