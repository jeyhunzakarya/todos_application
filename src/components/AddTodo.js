import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/usersSlice";
import {useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import "../css/button.css";

function AddTodo ()  {
	let userName  = useParams().userName;
	const [title, setTitle] = useState('');
	const [innerTxt, setInnerTxt] = useState('');
	const dispatch = useDispatch();
	const currUser = useSelector((state)=>{
		return state.users.find(user=>user.name==userName);
	});
	const onSubmit = (event) => {
		event.preventDefault();

		if(title.trim().length === 0)
		{
			alert("please add nonempty todo");
			setTitle("");
			return;
		}
		dispatch(
			addTodo({
				user:currUser,
				todo:{
					title,
					txt:innerTxt,
					id:currUser.todos.length+1,
					isPrivate:true
				}
			})
		);

		setTitle("");
		setInnerTxt("")
	};

	return (
		<div className="add-todo">
			<input
				type="text"
				className="task-input"
				placeholder="title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			></input>
			<textarea 
				id="text" 
				name="text" 
				rows="12" 
				cols="50"
				placeholder="content"
				value={innerTxt}
				onChange={(event) => setInnerTxt(event.target.value)}
			>
			</textarea>
			<button className="modal-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	)
}


export default AddTodo;