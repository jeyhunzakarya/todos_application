import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addUser } from "../redux/usersSlice";

function AddUser (){
	const [value, setValue] = useState('');
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault();
		if(value.trim().length === 0)
		{
			alert("username must be nonempty");
			setValue("");
			return;
		}

		dispatch(
			addUser({
				user: value
			})
		);

		setValue("");
	};

	return (
		<div className="addUser">
			<input
				type="text"
				className="task-input"
				placeholder="Add task"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button className="task-button" onClick={onSubmit}>
				Save
			</button>
		</div>
	);
};

export default AddUser;
