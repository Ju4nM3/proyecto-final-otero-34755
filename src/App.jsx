import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css';
import Header from './components/content/Header';
import ItemListContainer from './components/content/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/content/ItemDetailContainer/ItemDetailContainer'
import About from './components/content/About'
import Contact from './components/content/Contact'
import Footer from './components/content/Footer';
import CartContainer from './components/content/Cart/CartContainer';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer/>} />
          <Route path="/product/:id" element={<ItemDetailContainer/>} />
          <Route path="/cart" element={<CartContainer/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<h1>ERROR 404</h1>}/>
        </Routes>
        <Footer/>    
      </BrowserRouter>
    </>
  );
}

export default App;
