import React, { useState } from 'react'
import '/EditTodo.css'

const EditTodo = (props) => {
    const [item, setItem] = useState(props.EditTodo)
    
    const handleEditInput = (e) => {
         let newObj = {...item};
    }

  return (
    <div className='main-modal'>
      <div className='inner-modal '>
        <div className='close'> 
        <button onClick={props.handleCloseModal}>-</button>
          <div>
            <input type="text" onChange={handleEditInput} className='inp-edit'/>
            <button onClick={()=>props.handleSaveTask(item)}>Save</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default EditTodo