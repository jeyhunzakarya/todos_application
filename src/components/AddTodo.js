import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/usersSlice";
import {useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
function AddTodo ()  {
	let id  = useParams();
	const [title, setTitle] = useState('');
	const [innerTxt, setInnerTxt] = useState('');
	const dispatch = useDispatch();
	const user = useSelector((state)=>{
		return state.users.find(user=>user.id==id);
	});

	const onSubmit = (event) => {
		event.preventDefault();

		if(title.trim().length === 0)
		{
			alert("please add nonempty task");
			setTitle("");
			return;
		}

		dispatch(
			addTask({
				user:user,
				todo:{
					title,
					txt:innerTxt
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
			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	)
}


export default AddTodo;