import React, { useState } from 'react'


const EditTodo = (props) => {
    const [item, setItem] = useState(props.EditTodo)
    
    

    const handleNameInp = (e) => {
      let newObj = {...item};
      newObj.neme = e.target.value;
      setItem(newObj);
    }

    const handleSurnameInp = (e) => {
      let newObj = {...item};
      newObj.surneme = e.target.value;
      setItem(newObj);
    }

    const handlePhoneInp = (e) => {
      let newObj = {...item};
      newObj.phone = e.target.value;
      setItem(newObj);
    }

    const handleMailInp = (e) => {
      let newObj = {...item};
      newObj.mail = e.target.value;
      setItem(newObj);
    }

    

    

  return (
    <div className='main-modal'>
      <div className='inner-modal '>
        <div className='close'> 
        <button onClick={props.handleCloseModal}>x</button>
          <div>
          <input type="text" placeholder='name' onChange={handleNameInp}/>
           <input type="text" placeholder='surname' onChange={handleSurnameInp}/>
           <input type="text" placeholder='phone' onChange={handlePhoneInp} />
           <input type="text" placeholder='mail' onChange={handleMailInp} />
            <button onClick={()=>props.handleSaveTask(item)}>Save</button>
            
          </div>
        </div>

      </div>

    </div>
  )
}

export default EditTodo