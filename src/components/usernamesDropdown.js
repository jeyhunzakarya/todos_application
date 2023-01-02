import React from 'react';
import { useSelector } from "react-redux";
import "../css/dropdown.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useDispatch } from "react-redux";
import {selectUser} from "../redux/selectedUserSlice"

const UsernamesDropdown = () => {
	const users = useSelector((state)=>{
		return state.users
	})
	const dispatch = useDispatch();
	const onUserClick = (e)=>{
		const selectedUsr = users.find(user=>user.id == e.value)
		dispatch(
			selectUser({
				user: selectedUsr
			})
		);
	}

	const usersDropdown = useSelector((state)=>{
		return state.users.map(user=>{
			return {
				label : user.name,
				value: user.id,
			}
		});
	});
	usersDropdown.reverse()
	return 	<Dropdown options={usersDropdown} onChange = {onUserClick} placeholder="Select user" />;
};

export default UsernamesDropdown;
