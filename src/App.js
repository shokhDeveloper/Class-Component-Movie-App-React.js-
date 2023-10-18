

import React, { Component } from 'react'
import { Header } from './Layout/Header'
import { Main } from './Layout/Main'
import { Footer } from './Layout/Footer'
import axios from 'axios'
export class App extends Component {
 state = {
  movies: [],
  searchMovie: ""
 }
 handleGetMovie = async () => {
  const request = await axios.get("http://www.omdbapi.com/?&apikey=c461dd53&s=Batman")
    const response = await request.data
    if(response?.Search){
      console.log(response)
      this.setState({movies: response?.Search})
    }
 }
 SearchMovie = async (text, type = "all") => {
  const request = await axios.get(`http://www.omdbapi.com/?&apikey=c461dd53&s=${text}&type=${type !== "all" ? type: ""}`)
    const response = await request.data
    if(response?.Search){
      console.log(response)
      this.setState({movies: response?.Search})
    }
 }
 componentDidMount(){
  this.handleGetMovie()
}
 render() {
  
  return(
    <>
      <Header/>
      <Main searchMovie={this.SearchMovie} movies={this.state.movies}/>
      <Footer/>
    </>
    )
   }
 }
