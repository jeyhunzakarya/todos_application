import React from 'react'
import AddUser from './AddUser';
import UsernamesDropdown from './usernamesDropdown';
import ContinueBtn from './ContinueBtn';

function UsersScreen() {
	return (
		<div className="app">
			<h1 className="title">All users</h1>
			<AddUser />
			<UsernamesDropdown />
			<ContinueBtn/>
		</div>
	);
}

export default UsersScreen