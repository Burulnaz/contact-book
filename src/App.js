import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import TodoLlist from './components/TodoList/TodoLlist'


const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState({});
  const [modal, setModal] = useState({});

  const hendeleCont = (newObj)=>{
    let newContact = [...todos]
    newContact.push(newObj)
    setTodos(newContact);
  }

  const handleEdit = (taskToEdit) => {
    setModal(true)
    setEditTodo(taskToEdit);
  };

  const handleCloseModal = () => {
    setModal(false)
  };

  const hendleSaveTask = (updateTask) => {
    const newTodos = todos.map((item)=>{
      if(item.id===updateTask.id){
        return updateTask
      }
      return item;
    })
    setTodos(newTodos);
    handleCloseModal();
  };
  
  return (
    <div>
      <AddTodo editTodo={editTodo} handleSaveTask={hendleSaveTask} hendeleCont={hendeleCont}/>
      <TodoLlist todos={todos} hendeleCont={hendeleCont}/>
    </div>
  )
}

export default App