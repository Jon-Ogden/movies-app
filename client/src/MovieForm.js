import axios from "axios"
import { useState } from "react"

const MovieForm = (props)=>{
    const [name, setName] = useState('')
    const [year, setYear] = useState(0)

    const handleSubmit = async(e)=>{
        e.preventDefault()
        console.log({name, year})
       
        try{
          let res = await axios.post('/api/movies',{name, year})
          props.addMovie(res.data)
        } catch(err){
          console.log(err)
        }

    }
    return (
        <div>
            <h1>What's Your Favorite Movie?</h1>
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
export default MovieForm
