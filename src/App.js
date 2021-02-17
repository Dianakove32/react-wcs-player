// import Main from './Components/Main';
import { Component } from "react";
import CardList from "./Components/CardList";
import Player from "./Components/Player";
import SearchBar from "./Components/searchbar";
import data from "./Components/data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pickedMovie: null,
      movieNameForSearch:""
    };
this.handleSort =this.handleSort.bind(this)
    this.handleSetMovie2 = this.handleSetMovie.bind(this);
  }

  handleSetMovie(movieTitle) {
    const findMovieByTitle = data.find((mov) => mov.title === movieTitle);
    this.setState({
      ...this.state,
      pickedMovie: findMovieByTitle,
    });

  }
  handleSort(movieName){
    this.setState({
      ...this.state,
      movieNameForSearch:movieName
    })

}

  render() {
    const { pickedMovie, movieNameForSearch } = this.state;
    console.log(movieNameForSearch)
    const handleSetMovie2 = this.handleSetMovie2;

    return (
      <div>
        <h1> Wild-Code-School Player</h1>
        <SearchBar   onChange={(e)=>{this.handleSort(e.target.value)}}/>
        <div className="App">
          <Player movie={pickedMovie} />
          <CardList   handleSetMovie={handleSetMovie2}
          data={data.filter((oneMovie) =>{return oneMovie.title.includes(movieNameForSearch)})}/>
        </div>

        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
