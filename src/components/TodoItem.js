import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import {deleteTodo} from "../redux/usersSlice"

const TodoItem = ({ todo }) => {
	let id  = useParams().id;
	const dispatch = useDispatch();
	const currUser = useSelector((state)=>{
		return state.users.find(user=>user.id==id);
	});
	const onDeleteClick = ()=>{
		dispatch(
			deleteTodo({
				user:currUser,
				todo
			})
		);
	}

	return (
		<li className="task-item">
			<h1>
				{todo.title}
			</h1>
			<div>{todo.txt}</div>
			<button onClick={onDeleteClick}> delete </button>
			<button>copy link</button>
			<button>toggle visibility</button>
		</li>
	);
};

export default TodoItem;
