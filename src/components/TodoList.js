import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import {useParams } from "react-router-dom";

const TodoList = () => {
	let userName  = useParams().userName;
	let todos = useSelector((state)=>{
		return (state.users.find(user=>user.name==userName).todos);
	});
	todos = [...todos].reverse()
	return (
		<ul className="tasks-list">
			{todos.map((todo) => (
				<TodoItem key={todo.id} todo={todo}  />
			))}
		</ul>	
	);
};

export default TodoList;
