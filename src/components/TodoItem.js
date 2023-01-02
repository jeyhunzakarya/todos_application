import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";
import {deleteTodo, toggleVisibility} from "../redux/usersSlice"
import TodoCard from './TodoCard';
import "../css/button.css";

function TodoItem ({ todo }){
	const navigate = useNavigate()
	let userName  = useParams().userName;
	const dispatch = useDispatch();
	const currUser = useSelector((state)=>{
		return state.users.find(user=>user.name==userName);
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
		<div>
			<TodoCard todo={todo} currUser={currUser}/>
			<button className="delete-button"  onClick={onDeleteClick}> delete </button>
			<button className="general-button" onClick={onCopyClick} >copy link</button>
			<button className="general-button" onClick = {onToggleClick}>toggle visibility</button>
		</div>
	);
};

export default TodoItem;
