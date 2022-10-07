const products = [
    { id: 1, category:'pc', name:'pc', price:'80000'},
    { id: 2, category:'notebook', name:'notebook', price:'120000'},
    { id: 3, category:'pc', name:'monitores', price:'50000'},
    { id: 4, category:'consola', name:'playstation', price:'250000'},
    { id: 5, category:'consola', name:'xbox', price:'250000'},
]



export const getProducts = () => { 
    return new Promise( (resolve)=>{ 
        setTimeout( () =>{ 
            resolve( products ) }, 3000)
 }) 
}
export const getItemsDetail = (itemId) => { 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ( products.find( p=> p.id === Number(itemId) ) )
        }, 1500);
    })
     }