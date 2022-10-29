import React, { useEffect } from 'react'
import { doc, getDoc, getFirestore } from "firebase/firestore";



const ListContainer = () => {
useEffect (() => {
getItem( )
}, [])

const getItem = () => {
    const db = getFirestore()
    const docRef = doc( db, 'items', 'De3TSaSxYG6ELtUfB5sZ' )
    getDoc( docRef ).then ( res =>{
        console.log({id: res.id, ...res.data()});
    })
}

  return (
    <div>ListContainer</div>
  )
}
export default ListContainer