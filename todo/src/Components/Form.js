import './style.css'
import {useState,useEffect} from 'react'
import Task from './Task'

const Form = ()=>{
    const [task, setTask] = useState('') 
    const [tasks, setArray] = useState([])

    useEffect(() => {
        console.log(':UseEfferct');
        <Task/>
    },[tasks]);
      
    return(
        <>
            <form className="form" onSubmit={(e)=>{
                e.preventDefault()
                setArray(prevTask => [...tasks, {
                    id: prevTask.length,
                    value: task
                }]);
            }}>
                <input onChange={(e)=>{
                    setTask(e.target.value)
                }}
                type="text" value={task}>
                </input>
                <input type = "submit" className='btn btn-success'>
                </input>
            </form>
        </>
    )

}
export default Form