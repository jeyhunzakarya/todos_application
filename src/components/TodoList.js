import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from "react-redux";
import {useParams } from "react-router-dom";

const TodoList = () => {
	let id  = useParams().id;
	const todos = useSelector((state)=>{
		return state.users.find(user=>user.id==id).todos;
	});
	return (
		<ul className="tasks-list">
			{todos.map((todo, index) => (
				<TodoItem key={index} todo={todo}  />
			))}
		</ul>	
	);
};

export default TodoList;
