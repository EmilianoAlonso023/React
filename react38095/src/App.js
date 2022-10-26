import './App.css'; 
 import NavBar from './components/NavBar';
 import ItemListContainer from './components/ItemListContainer'; 
 import Footer from './components/Footer';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Error404 from './components/Error404';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import InputEvents from './components/InputEvents';
import Order from './components/Order';
import ListContainer from './components/firebase/ListContainer';
import {CartProvider} from './context/CartContext'
import Products from './components/Products'
 


function App() {

  const styles = {padding: '10px'}
  return (
    <CartProvider>
     <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path={'/Input'} element={<InputEvents/>} />
          <Route path={'/firebase'} element={<ListContainer/>} />
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path={'/category/:id'} element={<ItemListContainer/>} />
          <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/components'} element={<ItemListContainer/>}/> 
          <Route path={'/order'} element={<Order/>} />
          <Route path={'*'} element={<Error404/>} />
          </Routes>
         <Footer/>  
        </BrowserRouter>
        </CartProvider>

    
  );
}

export default App;