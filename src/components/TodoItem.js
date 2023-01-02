import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import {deleteTodo, toggleVisibility} from "../redux/usersSlice"

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
	const onCopyClick = ()=>{
		navigator.clipboard.writeText(window.location.href+"/"+todo.id);
	}

	const onToggleClick = ()=>{
		dispatch(
			toggleVisibility({
				user:currUser,
				todo
			})
		);
	}

	return (
		<li className="task-item">
			<h1>
				{todo.isPrivate? "title hidden" : todo.title}
			</h1>
			<div>{todo.isPrivate? "content hidden": todo.txt}</div>
			<button onClick={onDeleteClick}> delete </button>
			<button onClick={onCopyClick} >copy link</button>
			<button onClick = {onToggleClick}>toggle visibility</button>
		</li>
	);
};

export default TodoItem;
