import React from 'react';
import { BrowserRouter, Routes, Route, useSearchParams,  useParams } from "react-router-dom";
import UsersScreen from './components/UsersScreen';
import SingleUserScreen from './components/SingleUserScreen';
import SingleCardView from './components/SingleCardView';
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
