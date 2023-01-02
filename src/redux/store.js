import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./usersSlice";
import selectedUserReducer from "./selectedUserSlice";

export default configureStore({
    reducer:{
        selectedUser : selectedUserReducer,
        users: usersReducer,
    }
});
