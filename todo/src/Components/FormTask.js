import React from 'react'
import {useState} from 'react'
import { Button,Form } from 'react-bootstrap';

import Task from './Task'

const FormTask = ()=>{

    const [task, setTask] = useState('') 
    const [tasks, setArray] = useState([])

    return(
        <>
            <Form className="form" onSubmit={(e)=>{
                e.preventDefault()
                setArray(prevTask => [...tasks, {
                    id: prevTask.length,
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
           { tasks.length>0 ? <Task tasks= {tasks}/> : ""}
        </>
    )

}
export default FormTask