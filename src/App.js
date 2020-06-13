import React, { Component } from 'react';
import './App.css';
import { FaBars } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import FilmList from './components/Films';


/*function App() {
  return (
    <div className="App">

      <div className="col-1">
        <header className="menu-principal">
          <main>
            <div className="header-1">
              <div className="logo">
                <h1>Ria</h1>
              </div>

              <div className="header-topics">
                <ul>
                  <li>
                    <a href="">Ria&You</a>
                  </li>

                  <li>
                    <a href="">News</a>
                  </li>

                  <li>
                    <a href="">Events</a>
                  </li>

                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>

              <div className="header-options">
                <ul>
                  <li><a href="">Sign In</a></li>
                  <li><a href="">Register</a></li>
                </ul>
              </div>

              <div className="header-busca">
                < GoSearch color="#f8f8fb" size="1.5em" />
              </div>
            </div>
          </main>
        </header>

        <FilmList />
      </div>

      <div className='col-2'>
        <div className="menu-option">
          <FaBars color='#f8f8fb' size='2.5em' />
        </div>
        <div className='rede-social'>
          <ul>
            <li><AiOutlineInstagram size='1.5em' /></li>
            <li><FiFacebook size='1.5em' /></li>
            <li><FiTwitter size='1.5em' /></li>
          </ul>
        </div>
      </div>

    </div>

  );
}
*/

class App extends Component {


  constructor() {
    super();
    this.state = {
      results: [],
      planets: [],
      films: [],
      species: [],
      vehicles: [],
      starships: [],
      searchfield: '',
      route: 'selection',
    };
  }

  render() {
    return (
      <div className="App">

        <div className="col-1">
          <header className="menu-principal">
            <main>
              <div className="header-1">
                <div className="logo">
                  <h1>Ria</h1>
                </div>

                <div className="header-topics">
                  <ul>
                    <li>
                      <a href="">Ria&You</a>
                    </li>

                    <li>
                      <a href="">News</a>
                    </li>

                    <li>
                      <a href="">Events</a>
                    </li>

                    <li>
                      <a href="">Blog</a>
                    </li>
                  </ul>
                </div>

                <div className="header-options">
                  <ul>
                    <li><a href="">Sign In</a></li>
                    <li><a href="">Register</a></li>
                  </ul>
                </div>

                <div className="header-busca">
                  < GoSearch color="#f8f8fb" size="1.5em" />
                </div>
              </div>
            </main>
          </header>
          <FilmList />
        </div>

        <div className='col-2'>
          <div className="menu-option">
            <FaBars color='#f8f8fb' size='2.5em' />
          </div>
          <div className='rede-social'>
            <ul>
              <li><AiOutlineInstagram size='1.5em' /></li>
              <li><FiFacebook size='1.5em' /></li>
              <li><FiTwitter size='1.5em' /></li>
            </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
