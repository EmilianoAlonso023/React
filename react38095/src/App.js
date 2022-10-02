import logo from './logo.svg';
import './App.css'; 
/* import Saludo from './components/Saludo';*/ 
/*  import BoxForChildren from './components/BoxForChildren';   
 */ import NavBar from './components/NavBar';
 import Clicker from './components/Clicker';
 import ItemListContainer from './components/shop/ItemListContainer'; 
 import Footer from './components/Footer';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import ItemList from './components/shop/ItemList';
 import Error404 from './components/Error404';
import ItemCard from './components/shop/ItemCard';
 


function App() {

  const styles = {padding: '10px'}
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        
        <Routes>
          <Route path={'/'} element={<Clicker/>} />
          <Route path={'/shop'} element={<ItemList/>} />
          <Route path={'/shop/item/:id'} element={<ItemCard/>} />
          <Route path={'/shop/itemListContainer/:id'} element={<ItemListContainer/>} />
          {/* <Route path={'/shop/data/products/:id'} element={<products/>} /> */}
          <Route path={'*'} element={<Error404/>} />
        </Routes>
        <Footer/>  
      </BrowserRouter>
    
       
      
    </>
    
  );
}

export default App;