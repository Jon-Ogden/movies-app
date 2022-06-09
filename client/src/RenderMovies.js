import UpdateForm from "./UpdateForm";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm";

function RenderMovies(){
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
    
  
    if (loading) {
      return <p>loading</p>;
    }
    if (error) {
      return <p>{JSON.stringify(error)}</p>;
    }
   return (  
     <div>
    <MovieForm 
    addMovie={addMovie}
    />
    {movies.map((m) => {
      return (
     <MovieCard 
     m = {m}
     remove = {remove}
     editMovies={editMovies}
     />)})}
     </div>
   )};

export default RenderMovies