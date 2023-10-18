import React, { Component } from 'react'
import { SearchBox } from '../Components'

export class Main extends Component {
 state = {}

 render() {
    const {movies} = this.props
  return(
    <main>
        <section className='hero'>
            <div className="container">
                <SearchBox searchMovie={this.props.searchMovie}/>
                {movies?.length && (
                    <ul className="hero-inner">
                        {movies?.map(item => {
                            console.log(item)
                            return(
                                <li className="hero-item">
                                    <img src={item.Poster} width={300} height={400} alt="Movie Img" />
                                    <div className="hero-item-info">
                                        <p>{item.Type}</p>
                                        <h3>{item.Title.split(" ").slice(0, 2).join(" ")} ...</h3>
                                        <p>{item.Year}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                )}
            </div>
        </section>
    </main>
    )
   }
 }

