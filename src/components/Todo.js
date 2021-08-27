import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addtodo, deletetodo, removetodo,fetchName} from '../reducers/todoReducer'
import './todo.css'

const Todo = () => {

    const [inputData, setInputData]= useState('');
   const list = useSelector((state) => state.todo.list )
    const dispatch= useDispatch();
    return (
        <div className="main-div">

     <div className="child-div">
      <figure>
        <figcaption>Add your list here ✌️ </figcaption>
      </figure>
     
     <div className="addItems">
       <input type="text" placeholder="✍️ Add Items.." value={inputData} 
       onChange={(event) => setInputData(event.target.value)}
       />
       <i className="fa fa-plus add-btn" onClick={() => dispatch(addtodo({id: new Date().getTime().toString(), name:inputData}), setInputData(''))}></i>
     </div>

     <div className="showItems">
       {
         
        list.map((elem) => {
           return (
          <div className="eachItem" key={elem.id} >
         <h3>{elem.name}</h3> 
         <div className="todo-btn"> 
         <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deletetodo({id:elem.id}))}></i>  
         </div>      
       </div>)
         })
       }
            
     </div>

     <div className="showItems">
       <button className="btn effect04" data-sm-link-text="remove All" onClick={() => dispatch(removetodo())}><span>Check List</span></button>
       <button className="btn effect04" data-sm-link-text="Add to list" onClick={() => dispatch(fetchName())}><span>Check List</span></button>
     </div>

     </div>
    </div>
    )
}

export default Todo
