import { createSlice } from "@reduxjs/toolkit";

let counter = 1

export const usersSlice = createSlice({
    name: "users",
    initialState:[{id:0, name:"who", todos:["123", "456"]}],
    reducers:{
        addUser: (state, action)=>{
            const newUser = {
                id: counter++,
                name: action.payload.user,
                todos: [{title : "todo1", txt : "aaaaa"}, {title:"doto2", txt : "bbbbbb"}]
            }
            return  [...state, newUser]
        },
        addTask: (state, action)=>{
            const todo = action.payload.todo
            const user = action.payload.user
            return state.map(usr=>{
                if (usr.id !=user.id) return usr
                else return {...usr,todos: usr.todos.concat(todo)}
            })
        }
    }
});

export const {addUser: addUser, addTask} = usersSlice.actions;

export default usersSlice.reducer;
