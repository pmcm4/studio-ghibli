import styles from './App.module.scss';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { HomePage } from './components/homepage/homepage';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import { SingleMovie } from './components/single-movie/single-movie';
import { MovieList } from './components/movie-list/movie-list';
import { About } from './components/about/about';

function App() {
    return (
        <div className={styles.App}>
        <BrowserRouter>
        <Routes>
           <Route path='/' Component={HomePage}/>
         </Routes>
         <Routes>
           <Route path='/movielist' Component={MovieList}/>
         </Routes>
         <Routes>
           <Route path='/singlemovie' Component={SingleMovie}/>
         </Routes>
         <Routes>
           <Route path='/about' Component={About}/>
         </Routes>
       </BrowserRouter>   
        </div>
    );
}

export default App;
