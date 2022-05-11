import React from 'react'
import { Button,Card } from 'react-bootstrap';

const Task =(props)=>{
    const {tasks,setArray} = props

    return(
        <>
        {
            
            tasks.map((task, index)=>{
                return(
                <Card style={{ display: 'flex',flexDirection: 'row' ,justifyContent: 'space-between',  alignItems: 'center'  }} >
                        <Card.Text>
                        {task.value}
                        </Card.Text>
                    <Button id={task.id} onClick={(e)=>{                      
                        setArray(tasks.filter(task => 
                            {
                            return task.id !== e.target.id}
                            ));
                    }} variant="primary">Delete/ Done</Button>
                </Card>)
                
            })  
        }
        </>
    )
}
export default Task