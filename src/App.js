import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams,  useParams } from "react-router-dom";
import UsersScreen from './components/UsersScreen';
import SingleUserScreen from './components/SingleUserScreen';

function App (){
    return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<UsersScreen />}></Route>
				<Route path="/:id" element={<SingleUserScreen/>} />
			</Routes>
		</BrowserRouter>
	)
};

export default App;
