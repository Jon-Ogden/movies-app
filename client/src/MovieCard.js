import UpdateForm from "./UpdateForm";
import { useState } from "react";

function MovieCard(props){
    const [show, setShow] = useState(true)

            return ( show ? (
                <div>
                  <h1>{props.m.name}: {props.m.year}</h1>
                  <button onClick={() => props.remove(props.m.id)}>Delete</button>
                    <button onClick={()=>{setShow(!show)}}>Update</button>
                </div>
              ): <UpdateForm 
                    id={props.m.id} 
                    name={props.m.name}
                    year={props.m.year}
                    setShow ={setShow}
                    editMovies={props.editMovies}
               />) 

}

export default MovieCard