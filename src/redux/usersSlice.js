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
                todos: [{title : "todo1", txt : "aaaaa", isPrivate : false}, {title:"doto2", txt : "bbbbbb", isPrivate:false}]
            }
            return  [...state, newUser]
        },

        addTodo: (state, action)=>{
            const todo = action.payload.todo
            const user = action.payload.user
            return state.map(usr=>{
                if (usr.id !=user.id) return usr
                else return {...usr,todos: usr.todos.concat(todo)}
            })
        },

        deleteTodo: (state, action)=>{
            const todoForDelete = action.payload.todo
            const user = action.payload.user
            return state.map(usr=>{
                if (usr.id !=user.id) return usr
                else {
                    return {...usr,todos: usr.todos.filter(todo=>todo.id!=todoForDelete.id)}}
            })
        },

        toggleVisibility: (state, action)=>{
            const user = action.payload.user
            const todoForToggle = action.payload.todo
            return state.map(usr=>{
                if (usr.id !=user.id) return usr
                else {
                    return {...usr,todos: usr.todos.map(todo=>{
                        if (todo.id!=todoForToggle.id) return todo
                        else return {...todo, isPrivate : !todo.isPrivate}
                    })}
                }
            })
        }
    }
});

export const {addUser: addUser, addTodo, deleteTodo,toggleVisibility} = usersSlice.actions;

export default usersSlice.reducer;
