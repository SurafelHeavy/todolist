import { useState } from 'react'
import './App.css'
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheckLg} from 'react-icons/bs';
function App() {
  const [allTodos, setAllTodos] = useState ([]);
  const [newTodoTitle, setNewTodoTitle] = useState ('');
  const [newDescription, setNewDescription] = useState ('');
  const [completedTodos, setCompletedTodos] = useState ([]);
const [isCompleteScreen , setIsCompleteScreen]=useState(false);

 const handleAddToDo=()=>
 {
  let newTodoItem={
    title:newTodoTitle,
    description:newDescription
  }
  let updateTodo=[...allTodos];
  updateTodo.push(newTodoItem);
 }


  return (
   <div className='myapp'>
    <h1>To Do List</h1>
        <div className='todo_warpper'>
          <div className="todo_input">
            <div className="todo_input_item">
              <label htmlFor="task" className="todo_item">Title</label>
              <input type="text" value={newTodoTitle} 
              onChange={(e)=>setNewTodoTitle(e.target.value)} id="task" placeholder="what is the task" />
            </div>
            <div  className="todo_input_item">
              <label htmlFor="description" className="todo_item">Description</label>
              <input type="text" 
               value={newDescription} 
               onChange={(e)=>setNewDescription(e.target.value)}
              id="description" placeholder="Write your description" />
            </div>
            <div  className="todo_input_item">
            <button type="button" onClick={handleAddToDo} className='primaryBtn'>Add</button>
            </div>

          </div>
          <div className="btn-area">
            <button className={`secondarybtn ${isCompleteScreen==false && 'active'}`}
              onClick={() => setIsCompleteScreen(false)} >Todo</button>
            <button className={`secondarybtn ${isCompleteScreen==true && 'active'}`}
             onClick={() => setIsCompleteScreen(true)}>Completed</button>
          </div>
          <div className="todo_list">
            <div className="todo_list_item">
             <div> <h3>Task3</h3>
              <p>write description here</p></div>
              <div>
               <AiOutlineDelete
                    title="Delete?"
                    className="icon"
                    // onClick={() => handleToDoDelete (index)}
                  />
               <BsCheckLg
                    title="Completed?"
                    className=" check-icon"
                    // onClick={() => handleComplete (index)}
                  />
                </div>
            </div>
           
          </div>
        </div>
   </div>
  )
}

export default App
