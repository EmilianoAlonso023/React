const products = [
    { id: 1, category:'pc', name:'pc', img:'https://mexx-img-2019.s3.amazonaws.com/tumb_TT25-Intel-Core-i5-11600K-16Gb-RX6500XT_35170_2.jpeg', price:'80000'},
    { id: 2, category:'notebook', name:'notebook', img:'https://mexx-img-2019.s3.amazonaws.com/tumb_42082_6.jpeg', price:'120000'},
    { id: 3, category:'pc', name:'monitores', img:'https://mexx-img-2019.s3.amazonaws.com/tumb_Monitor-Led-22-LG-Full-Hd-75Hz-5Ms-22MP410-B_42935_1.jpeg', price:'50000'},
    { id: 4, category:'consola', name:'playstation', img:'https://www.atajo.com.ar/thumb/PS5-STANDARD-HORIZON63517PS5-STANDARD-HORIZON_400x400.jpg', price:'250000'},
    { id: 5, category:'consola', name:'xbox',img:'https://www.atajo.com.ar/thumb/0000000RRT-0000234357RRT-00002-Consola-Xbox-Series-X-01_400x400.jpg', price:'250000'},
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
    
     