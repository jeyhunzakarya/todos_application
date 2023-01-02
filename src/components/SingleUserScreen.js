import React from 'react'
import TodoList from './TodoList'
import NewTodoModal from './NewTodoModal'
import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";

function SingleUserScreen() {
        return (
            <div>
                <TodoList/>
                <NewTodoModal/>
            </div>
          )
 }

export default SingleUserScreen