import "./App.css";
import MovieForm from "./MovieForm";
import RenderMovies from "./RenderMovies";


function App() {

  return ( 
    <div className="App">
      <h1>MOVIES</h1>
       {RenderMovies()}
    </div>
  );
};

export default App;

// onClick={()=>{
//   setShow(!show)
// }}