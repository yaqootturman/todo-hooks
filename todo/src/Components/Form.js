import './style.css'
const Form = ()=>{
    return(
        <>
            <form className="form" onSubmit={(e)=>{
                e.preventDefault()

            }}>
                <input type="text">
                </input>
                <input type = "submit" className='btn btn-success'>
                </input>
            </form>
        </>
    )

}
export default Form