import React from 'react'
import TodoList from './TodoList'
import NewTodoModal from './NewTodoModal'
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

function SingleUserScreen() {
	let id  = useParams().id;
	const currUser = useSelector((state)=>{
		return state.users.find(user=>user.id==id);
	});
    if (currUser) {
        return (
            <div>
                <TodoList/>
                <NewTodoModal/>
            </div>
          )
    } 
    else return <h2>user not found</h2>
 }

export default SingleUserScreen