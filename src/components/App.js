import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams,  useParams } from "react-router-dom";
import UsersScreen from './UsersScreen';
import SingleUserScreen from './SingleUserScreen';
import SingleCardView from './SingleCardView';
function App (){
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UsersScreen />}></Route>
				<Route path="/:userName" element={<SingleUserScreen/>} />
				<Route path="/:userName/:todoId" element={<SingleCardView/>} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;
