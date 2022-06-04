import React from 'react'

const Singletodo = ({item, handledelete}) => {
  return (
    <div className='single-todo'>
        <div>
            {item}
        </div>
        <button onClick={() => handledelete(item)}>x</button>
    </div>
  )
}

export default Singletodo