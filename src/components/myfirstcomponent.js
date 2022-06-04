import React from 'react'

const Myfirstcomponent = ({name, book}) => {
  return (
    <div>
        <h1 className='new-heading'>My first component</h1>
        <p>{name}</p>
        <p>{book}</p>
    </div>
  )
}

export default Myfirstcomponent