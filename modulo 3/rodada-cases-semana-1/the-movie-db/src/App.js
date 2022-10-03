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
  const [buttonSelected, setButtonSelected] = useState(true);
  const [id, setId] = useState('');
  const [image, setImage] = useState('');
  const [trailer, setTrailer] = useState('');
  const [recomendations , setRecomendations] = useState([])
  const [credits , setCredits] = useState({})
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
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${language}`)
    .then(resp => {
      setGenres(resp.data.genres)
    });
  }

  const getTrailer = () => {
    setTrailer('');
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=${language}`)
    .then(resp => {
      setTrailer(resp.data.results[0].key)
    });
  }

  const getRecomendations = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}&language=${language}&page=1`)
    .then(resp => {
      setRecomendations(resp.data.results);
    });
  }

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

  const getCredits = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=${language}`)
    .then(resp => {
      setCredits(resp.data);
    });
  }

  useEffect(() => {
    getMoviesList();
    getGenres();
  }, [page, filters, buttonSelected]);

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
    id: id,
    setId: setId,
    image: image,
    setImage: setImage,
    getTrailer: getTrailer,
    trailer: trailer,
    getRecomendations: getRecomendations,
    recomendations: recomendations,
    setRecomendations: setRecomendations,
    credits: credits,
    getCredits: getCredits,
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
