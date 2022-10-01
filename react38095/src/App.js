import logo from './logo.svg';
import './App.css'; 
/* import Saludo from './components/Saludo';*/ 
/*  import BoxForChildren from './components/BoxForChildren';   
 */ import NavBar from './components/NavBar';
 import Clicker from './components/Clicker';
 import ItemListContainer from './components/shop/ItemListContainer'; 
 import Footer from './components/Footer';



function App() {

  const styles = {padding: '10px'}
  return (
    <>
    <NavBar/>
    <Clicker/> 
   <ItemListContainer greeting='Mi tienda'/> 
    
  {/*    <h1>Hola a todos!!</h1> 
     <BoxForChildren>
    <p>Un texto cualquiera</p>
    </BoxForChildren>  
    <h2 style={styles}>subtitulo</h2> 
       <li className='blue'>elemnto1</li>
      <li>elemnto2</li>
      <li>elemnto3</li> */}

      
        {/* <Saludo name='Adrian' age={33}/>
      <Saludo name ='Emiliano' age={33}></Saludo>
      <Saludo name='Cintia' age={30}></Saludo>
      <Saludo name='Angeles' age={28}></Saludo>
      <Saludo name='Ana' age={39}></Saludo>  */}
      <Footer/>  
    </>
    
  );
}

export default App;