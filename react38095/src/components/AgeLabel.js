 import React from 'react'

const AgeLabel = ( {age} ) => {
  const styles = {
    
    padding: '10px'
  }
  return (
    <span style={styles}>Edad: {age} </span>
  )
}

export default AgeLabel 