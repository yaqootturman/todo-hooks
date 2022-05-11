import './style.css'
import React from 'react'
import { Button,Card } from 'react-bootstrap';

const Task =(props)=>{
    const {tasks,setArray} = props

    return(
        <>
        {console.log(tasks)}
        {
            
            tasks.map((task, index)=>{
                return(
                <Card style={{ display: 'flex',flexDirection: 'row' ,justifyContent: 'space-between',  alignItems: 'center'  }} >
                        <Card.Text>
                        {task.value}
                        </Card.Text>
                    <Button id={task.id} onClick={(e)=>{
                        console.log(e.target.id);
                      
                        setArray(tasks.filter(task => 
                            {console.log(task.id , e.target.id, task.id == e.target.id)
                            return task.id == e.target.id}
                            ));
                    }} variant="primary">Delete/ Done</Button>
                </Card>)
                
            })  
        }
        </>
    )
}
export default Task