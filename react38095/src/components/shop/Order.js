import react from 'react'

const Order = () => {
    
    const items = [ 'Playstation', 'xbox', 'monitores' ]

    const putOrder = () => {
        const user = {name:'', phone:'', email:''}
        const Order = {
            buyer: user,
            items: items,
            total: 3
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