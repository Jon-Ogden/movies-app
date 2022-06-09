import axios from "axios"
import { useState } from "react"

const UpdateForm = (props)=>{
    const [name, setName] = useState(props.name)
    const [year, setYear] = useState(props.year)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
          let res = await axios.put(`/api/movies/${props.id}`,{name, year})
          props.editMovies(res.data)
        } catch(err){
          console.log(err)
        }
        props.setShow(true)
    }
    return (
        <div>
            <h1>Submit Your Movie</h1>
            <form onSubmit={handleSubmit}>
                <p>Name</p>
                <input value={name} onChange={(e)=>setName(e.target.value)}/>
                <p>Year</p>
                <input type='number' value={year} onChange={(e)=>setYear(e.target.value)}/>
          
                <button>Submit</button>
            </form>
        </div>
    )
}
export default UpdateForm;