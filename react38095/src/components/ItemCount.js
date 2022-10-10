 import { useEffect, useState } from "react";
 

const ItemCount = () => {
    const [counter, setCounter] = useState(0)
    useEffect ( () => {
        console.log ('se monto el componente');
    }, [])
    useEffect ( () => {
        console.log ('se hizo render');
    })
    useEffect ( () => {
        console.log ('se altero el counter');
    }, [counter])

    
    
    /* const clickHandler = () => {
        console.log('Hiciste click');
        setCounter ( counter + 1)
    }
    console.log ('se hizo render');

    
    */


const handleClick1 = () => {
    setCounter(counter + 1)
  }
  
  
  const handleClick2 = () => {   
    setCounter(counter - 1)
  }


  return (
    <div style={{
   marginBottom: '30px',
   
    }}>
      <button className="btn m-5">Contador</button>
      <div style={{
       
       position: 'absolute',
        top: '25vh',
        marginLeft: '30px', 
        

      }}>
        {counter}
      </div>
      <div className="buttons">
        <button style={{
          fontSize: '120%',
          Top: '-10px',
          marginLeft: '10px',
          position: 'relative',
          backgroundColor: 'grey',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick1}>+</button>


        <button style={{
          fontSize: '120%',
          marginLeft: '25px',
          position: 'relative',
          backgroundColor: 'grey',
          borderRadius: '8%',
          color: 'white',
        }}
          onClick={handleClick2}>-</button>
    
      </div>
    </div>
  )
}

 /*  return (
    <div>
    <div className="m-5">{ counter } </div>
       <button onClick={ clickHandler1 } className="btn m-5">Click Aqui</button>
       <button onClick={ clickHandler2 } className="btn m-5">Click Aqui</button>
    </div>
  )
} */
export default ItemCount 