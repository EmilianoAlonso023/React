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

    
    
    const clickHandler = () => {
        console.log('Hiciste click');
        setCounter ( counter + 1)
    }
    console.log ('se hizo render');
  return (
    <div>
    <div className="m-5">{ counter } </div>
       <button onClick={ clickHandler } className="btn m-5">Click Aqui</button>
    </div>
  )
}
export default ItemCount 