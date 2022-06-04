import React, {useState} from 'react';

function Addnewtodo({alltodos, setalltodos}) {
    const [inputChange, setInputChange] = useState('')
    const handlesubmit = (e) => {
        e.preventDefault()
    
    console.log(inputChange);

    if (inputChange !== ""){
      setalltodos([...alltodos, inputChange])

      setInputChange("")
    }}
  return (
    <form className='Add-new-todo' onSubmit={handlesubmit}>
        <input type="text" onChange={(e) => setInputChange(e.target.value)} value={inputChange}/>
        <button type='submit'>Add new</button>
    </form>
  )
}

export default Addnewtodo