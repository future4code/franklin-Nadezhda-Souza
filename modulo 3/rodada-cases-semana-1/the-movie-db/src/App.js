import './App.css';
import Router from './routes/Router'
import { ContextMovies } from './services/context';
import React, {useState, useEffect} from 'react';
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(undefined);
    const [genres, setGenres] = useState([]);
    const [filters, setFilters] = useState([]);
    const [buttonSelected, setButtonSelected] = useState('unselected');
    const apiKey = 'd081d773005fd2cf3c72b3e5ac20847d'
    const language = 'pt-BR'
    const sortBy = 'popularity.desc'

    const getMoviesList = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${language}&sort_by=${sortBy}&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate&with_genres=${filters}`)
        .then(resp => {
            setMovies(resp.data.results);
            setTotalPages(resp.data.total_pages)
        });
    }
    
    const getGenres = () => {
      axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=d081d773005fd2cf3c72b3e5ac20847d&language=pt-BR`)
      .then(resp => {
        setGenres(resp.data.genres)
      });
    }

    useEffect(() => {
      getMoviesList();
      getGenres();
    }, [page, filters, buttonSelected]);

    const addGenreFilter = (filter) => {
      setPage(1);
      if(filters.includes(filter)){
        filters.splice(filters.indexOf(filter), 1);
        setButtonSelected(!buttonSelected);
      }else{
        setFilters([...filters, filter]);
        setButtonSelected(!buttonSelected);
      }

    }

    const globalMovies = {
      movies: movies,
      setMovies: setMovies,
      page: page,
      setPage: setPage,
      totalPages: totalPages,
      setTotalPages: setTotalPages,
      genres: genres,
      setGenres: setGenres,
      filters: filters,
      setFilters: setFilters,
      apiKey:apiKey,
      language: language,
      sortBy: sortBy,
      getMoviesList: getMoviesList,
      addGenreFilter: addGenreFilter,
      getGenres: getGenres,
      buttonSelected: buttonSelected,
      setButtonSelected: setButtonSelected,
    }
    
  return (
    <div className="App">
      <ContextMovies.Provider value={globalMovies}>
        <Router/>
      </ContextMovies.Provider>
    </div>
  );
}

export default App;
