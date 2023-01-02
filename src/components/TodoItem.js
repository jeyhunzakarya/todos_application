import React,{useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {useParams } from "react-router-dom";
import {deleteTodo, toggleVisibility} from "../redux/usersSlice"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader'
import Typography from "@material-ui/core/Typography";

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
		<>
			<Card
				style={{
				width: 400,
				backgroundColor: "white",
				marginTop: 20,
				}}
			>

				<CardHeader
					component={Typography}
					title={todo.isPrivate? "title hidden" : todo.title}
				/>
		
				<CardContent>
					<Typography variant="body2" component="p">
						{todo.isPrivate? "content hidden": todo.txt}	
					</Typography>
				</CardContent>
		
			</Card>
			<button onClick={onDeleteClick}> delete </button>
			<button onClick={onCopyClick} >copy link</button>
			<button onClick = {onToggleClick}>toggle visibility</button>
		</>
	);
};

export default TodoItem;
