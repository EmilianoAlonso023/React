 import { useState } from "react";
 
const ItemCount = ({stock, onAdd}) => {
const [counter, setCounter] = useState(0)


const sumar = () => { 
  if(counter < stock){
    setCounter(counter + 1)
   }
  }
  
  
  const restar = () => { 
    if(counter > 0 ){  
    setCounter(counter - 1)
   }
  }


  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', width:'30%'}}> 
      <button 
         onClick={sumar}>+</button>
      <div>
        {counter}
      </div>

      <button
      onClick={restar}>-</button>
      </div>
      <button onClick={onAdd}>Comprar</button>
      </div>

  )
}


export default ItemCount 