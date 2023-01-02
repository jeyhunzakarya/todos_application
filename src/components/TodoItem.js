import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import {deleteTodo, toggleVisibility} from "../redux/usersSlice"
import TodoCard from './TodoCard';
import "../css/button.css";

function TodoItem ({ todo }){
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
		<>
			<TodoCard todo={todo}/>
			<button class="delete-button"  onClick={onDeleteClick}> delete </button>
			<button class="general-button" onClick={onCopyClick} >copy link</button>
			<button class="general-button" onClick = {onToggleClick}>toggle visibility</button>
		</>
	);
};

export default TodoItem;
