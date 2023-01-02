import React from 'react';


const TodoItem = ({ todo }) => {
	return (
		<li className="task-item">
			<h1>
				{todo.title}
			</h1>
			<div>{todo.txt}</div>
		</li>
	);
};

export default TodoItem;
