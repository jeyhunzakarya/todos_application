import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader'
import Typography from "@material-ui/core/Typography";
import { useNavigate} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function SingleCardView() {
    const userName = useParams().userName;
    const todoId = useParams().todoId
    const todos = useSelector((state)=>{
		return state.users.find(user=>user.name==userName).todos;
	});
    const todo = todos.find(todoElem=>todoElem.id == todoId)
    if (todo.isPrivate) { 
        return <h2>todo not found</h2>
    }
    else 
    return (
    <Card
        style={{
        width: 400,
        backgroundColor: "white",
        marginTop: 20,
        }}
    >
    
        <CardHeader
            component={Typography}
            title={todo.isPrivate? "title hidden" : todo.title}
        />

        <CardContent>
            <Typography variant="body2" component="p">
                {todo.isPrivate? "content hidden": todo.txt}	
            </Typography>
        </CardContent>
    </Card>
  )
}

export default SingleCardView