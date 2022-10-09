import './App.css'; 
 import NavBar from './components/NavBar';
 import ItemListContainer from './components/shop/ItemListContainer'; 
 import Footer from './components/Footer';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import Error404 from './components/Error404';
import ItemDetailContainer from './components/shop/ItemDetailContainer';
import ItemCount from './components/ItemCount';
 


function App() {

  const styles = {padding: '10px'}
  return (
  
     <BrowserRouter>
        <NavBar/>
        <ItemCount/>
        
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>} />
          <Route path={'/category/:id'} element={<ItemListContainer/>} />
          <Route path={'/item/:id'} element={<ItemDetailContainer/>} />
          <Route path={'/shop'} element={<ItemListContainer/>}/> 
          <Route path={'*'} element={<Error404/>} />
        </Routes>
        <Footer/>  
      </BrowserRouter>
    

    
  );
}

export default App;