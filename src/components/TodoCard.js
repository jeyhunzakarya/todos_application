import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from '@material-ui/core/CardHeader'
import Typography from "@material-ui/core/Typography";

function TodoCard({todo}) {
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

export default TodoCard