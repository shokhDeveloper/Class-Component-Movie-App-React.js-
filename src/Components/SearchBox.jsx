import React from "react";

export class SearchBox extends React.Component {
  state = {
    search: "batman",
    type: "all"
  };
  handleKey = (event) => {
    if(event.keyCode === 13) this.props.searchMovie(this.state.search, this.state.type)
  }
  handleChange = (event) => {
    
    this.setState({
      type: event.target.dataset.type
    }, () => {
      this.props.searchMovie(this.state.search, this.state.type)
    })
  }
  render() {
    return (
      <>
      <div className="search-bar">
        <input onKeyUp={this.handleKey} onChange={(event) => this.setState({search: event.target.value}) } type="search" name="search" pattern=".*\S.*" required />
        <button className="search-btn" type="submit">
          <span>Search</span>
        </button>
      </div>
      <div class="custom-radio">
        <label for="apple">
            <input onChange={this.handleChange} type="radio" id="apple" name="fruits" data-type="all" />
            <span>All</span>
        </label>

        <label for="orange">
            <input onChange={this.handleChange} type="radio" id="orange" name="fruits" data-type="movie" />
            <span>Movie</span>
        </label>

        <label for="banana">
            <input onChange={this.handleChange} type="radio" id="banana" name="fruits" data-type="series"/>
            <span>Series</span>
        </label>
    </div>
      </>
    );
  }
}
