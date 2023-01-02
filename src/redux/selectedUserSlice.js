import { createSlice } from "@reduxjs/toolkit";

export const selectedUserSlice = createSlice({
    name: "selectedUser",
    initialState:{},
    reducers:{
        selectUser: (state, action)=>{
            state = action.payload.user
            return state
        }
    }
});


export const {selectUser: selectUser} = selectedUserSlice.actions;

export default selectedUserSlice.reducer;