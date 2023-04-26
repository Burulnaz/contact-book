import React from 'react'


const TodoLlist = (props) => {
    console.log(props);
    
        
  return (
    <div>
        <h2>Todo List</h2>
        {props.todos.map((item)=>(
            <li key={item.id}>
               {item.name}
               {item.surname}
               {item.phone}
               {item. mail}
                {<button >edit</button>} 
                {<button onClick={()=>props.handleDelete(item.id)}>delete</button>}
            </li>
        ) )}
    </div>
  )
}

export default TodoLlist