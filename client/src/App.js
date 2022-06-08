
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieForm from "./MovieForm";
import UpdateForm from "./UpdateForm";


function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true)

  useEffect(() => {
    getMovies();
  }, []);

  const editMovies = (updatedMovies) => {
    let newMovies = [...movies]
    const editedMovies = newMovies.map((m) => {
      if (m.id !== updatedMovies.id) 
      {return m} else {
        return updatedMovies;
      }
    });
    setMovies(editedMovies)
    axios.put(`/api/movies/${updatedMovies.id}`)
  }

  const addMovie = (movie)=>{
    setMovies([movie, ...movies])
  }

  const getMovies = async () => {
    try {
      let res = await axios.get("/api/movies");
      console.log('res', res)
      setMovies(res.data);
      setLoading(false);
    } catch (err) {
      
      alert('error occured')
      setError(err);
      setLoading(false);
    }
  };
  function remove(id){
    let movie = movies.filter((current)=>{
      return id !== current.id
    })
    setMovies(movie)
    axios.delete(`/api/movies/${id}`)
  }
  

  const renderMovies = () => {
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
   return (  
  const movieMap = movies.map((m) => {
    return ( show ? (
        <div>
          <h1>MOVIES</h1>
          <h1>{m.name}: {m.year}</h1>
          <button onClick={() => remove(m.id)}>Delete</button>
          <button onClick={()=>editMovies(m.id)}>Update</button>
        </div>
      ): MovieForm) 
    })
    //  
   )};

  return ( 
    <div className="App">
      movieMap
      <button onClick={()=>{
            setShow(!show)
          }}>Toggle View</button> 
      {/* <MovieForm addMovie={addMovie}/> */}
      <div >
       
        </div> 
    </div>
  );
};

export default App;

// onClick={()=>{
//   setShow(!show)
// }}