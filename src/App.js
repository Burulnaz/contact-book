import React, { useState } from 'react'
import AddTodo from './components/AddTodo/AddTodo'
import EditTodo from './components/EditTodo/EditTodo';
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

  const handleDelete = (id) => {
    let newTodos = todos.filter((item)=>item.id !==id);
    setTodos(newTodos) 
  };


  

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
      <AddTodo editTodo={editTodo}  hendeleCont={hendeleCont}/>
      <TodoLlist todos={todos} hendeleCont={hendeleCont} handleEdit={handleEdit} handleDelete={handleDelete}/>
      {modal ? <EditTodo editTodo={editTodo} handleCloseModal={handleCloseModal} handleSaveTask={hendleSaveTask}/> : null }
    </div>
  )
}

export default App