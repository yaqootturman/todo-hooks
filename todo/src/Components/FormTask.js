import React ,{useState} from 'react'
import { Button,Form } from 'react-bootstrap';
import uniqueId from 'lodash/uniqueId';
import Task from './Task'

const FormTask = ()=>{

    const [task, setTask] = useState('') 
    const [tasks, setArray] = useState([])

    return(
        <>
            <Form className="form" onSubmit={(e)=>{
                e.preventDefault()
                setArray(prevTask => [...tasks, {
                    id: uniqueId("prefix-"),  
                    value: task
                }]);
            }}>
                <Form.Group style={{ display: 'contents' }} className="mb-3" controlId="formBasicEmail">
                    <Form.Control inline type="text" placeholder="Enter task to do" value={task} onChange={(e)=>{
                    setTask(e.target.value)
                    }}/> 
                    <Button  variant="primary" type="submit">
                    Submit
                    </Button>
                </Form.Group> 
            </Form>
           { tasks.length>0 ? <Task tasks= {tasks} setArray={setArray}/> : ""}
        </>
    )

}
export default FormTask