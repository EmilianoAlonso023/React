import React from 'react'

const InputEvents = () => {

   const handler = ( event ) => {  
   console.log('tecleado: ' + event.key);
   const notAllowed = ['a','e','i','o','u']
   if ( notAllowed.includes( event.key.toLowerCase()) ) {
    event.preventDefault()

    }
   }

  return (
    <div className='m-5'>
      <input onKeyDown={handler} type='text' className='border border-gray' />
      </div>
  )
}
export default InputEvents