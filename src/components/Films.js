import React, { Component } from 'react';
import axios from 'axios';
import Starwars from '../img/star_wars_logo.png'
import '../App.css';

class MyButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="btn">
                <button className="btn ver-mais">Ver mais</button>
            </div>
        );
    }
}

class MyFilms extends Component {

    render() {
        return (
            <div className="mteste" >
                <p>t</p>
            </div>
        );
    }
}

class FilmsList extends Component {
    /*
    constructor(props) {
        super(props);
        this.state = {
            films: [],
        }
        this.getFilms = this.getFilms.bind(this);
    }

    getFilms() {
        axios.get(`https://swapi.dev/api/films/${this.props.codg}/`).then((response) => {
            const bkpFilms = this.state.films
            this.setState({ ...bkpFilms, films: response.data })
        })

    }

    componentDidMount() {
        this.getFilms();
    }
    */

    render() {
        return (
            <div className="col-films">
                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>A New Hope</h1>
                        <MyButton />
                    </div >
                </div>

                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>The Empire Strikes Back</h1>
                        <MyButton />
                    </div >
                </div>

                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>Return of the Jedi</h1>
                        <MyButton />
                    </div >
                </div>

                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>The Phantom Menace</h1>
                        <MyButton />
                    </div >
                </div>

                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>Attack of the Clones</h1>
                        <MyButton />
                    </div >
                </div>

                <div className="filmes">
                    <div className='img-filme'>
                        <img src={Starwars} />
                    </div>
                    <div className="movie">
                        <h1>Revenge of the Sith</h1>
                        <MyButton />
                    </div >
                </div>
            </div >
        );
    }
}

export default FilmsList;
