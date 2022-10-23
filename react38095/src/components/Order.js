import React from 'react'

const Order = () => {
    
    const items = [ 'xBox', 'monitor LG' ]

    const putOrder = () => {
        const user = {name:'Sara Garcia', phone:'1159295109', email:'sarara@gmail.com'}
        const order = {
            buyer: user,
            items: items,
            total: 2
        }
console.log(order);
    }
  return (
    <div>
        <h1 className='text-5xl'>Orden</h1>
        {items.map ( i => <li key={i}>{i}</li> )}
        <button className='btn' onClick={putOrder}>Levantar orden</button>
        </div>
  )
}
export default Order