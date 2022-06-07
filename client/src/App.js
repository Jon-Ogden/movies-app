
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import MovieForm from "./MovieForm";


function App() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovies();
  }, []);

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
   return movies.map(m=>{
      return (
        <div key={m.id} style={{margin:'20px', border:'1px solid', color:'lightblue'}}>
          <h1>{m.name}: {m.year}</h1>
          <button onClick={() => remove(m.id)}>delete</button>
        </div>
      )
    })
 
  };

  return (
    <div className="App">
      <MovieForm addMovie={addMovie}/>
      <h1>MOVIES</h1>
      <div>{renderMovies()}</div>
    </div>
  );
}

export default App;
