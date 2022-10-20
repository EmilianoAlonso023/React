import React from 'react'

const Order = () => {
    
    const items = [ 'Playstation', 'monitores' ]

    const putOrder = () => {
        const user = {name:'Sara Garcia', phone:'1159295109', email:'sarara@gmail.com'}
        const Order = {
            buyer: user,
            items: items,
            total: 2
        }
console.log(Order);
    }
  return (
    <div>
        <h1 className='text-5l'>Order</h1>
        {items.map( i => <li>(i)</li> )}
        <button className='btn' onClick={putOrder}>Levantar orden</button>
        </div>
  )
}
export default Order