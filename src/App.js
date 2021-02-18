// import Main from './Components/Main';
import { Component } from "react";
import CardList from "./Components/CardList";
import Player from "./Components/Player";
import SearchBar from "./Components/searchbar";
import data from "./Components/data";
import Btn from "./Components/Button";
import Comment from "./Components/Comment";


class App extends Component {
  constructor() {
    super();
    this.state = {
      pickedMovie: null,
      movieNameForSearch: "",

    };
    this.handleSort = this.handleSort.bind(this)
    this.handleSetMovie2 = this.handleSetMovie.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  handleSetMovie(movieTitle) {
    const findMovieByTitle = data.find((mov) => mov.title === movieTitle);
    this.setState({
      ...this.state,
      pickedMovie: findMovieByTitle,
    });

  }
  handleSort(movieName) {
    this.setState({
      ...this.state,
      movieNameForSearch: movieName
    })

  }
  showAll() {
    this.setState({
      movieNameForSearch: ""
    })
  }

  render() {
    const { pickedMovie, movieNameForSearch } = this.state;
    console.log(movieNameForSearch)
    const handleSetMovie2 = this.handleSetMovie2;
    const dataF = data.filter((oneMovie) => { return oneMovie.title.includes(movieNameForSearch) })
    return (
      <div className="mainContainer">
        <h1> Wild-Code-School Player</h1>

 <SearchBar handleSort={this.handleSort} />
        <div className="App">

          <div>
            <Player movie={pickedMovie} />
            <Comment />

          </div>


          <CardList handleSetMovie={handleSetMovie2}
            dataF={dataF}
            isFiltered={data.length !== dataF.length}
            isEmpty={dataF.length == 0}
            showAll={this.showAll} />

        </div>

        {/* <Main /> */}
      </div>
    );
  }
}

export default App;
