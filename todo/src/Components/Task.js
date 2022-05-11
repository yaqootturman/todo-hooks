import './style.css'
import React from 'react'
import { Button,Card } from 'react-bootstrap';

const Task =(props)=>{
    const {tasks} = props
    return(
        <>
        {
            tasks.map((task)=>{
                return(
                <Card style={{ display: 'flex',flexDirection: 'row' ,justifyContent: 'space-between',  alignItems: 'center'  }} >
                        <Card.Text>
                        {task.value}
                        </Card.Text>
                    <Button variant="primary">Delete/ Done</Button>
                </Card>)
                
            })  
        }
        </>
    )
}
export default Task