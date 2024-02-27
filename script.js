"use strict";

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "10");

let personalMovieDB = {
    'count': numberOfFilms,
    'movies':{},
    'actors':{},
    'genres':[],
    'privat': false
}

let lastWatchedFilm = prompt("Один из последних просмотренных фильмов?", "Одимн дома");
let rateFilm = prompt("На сколько оцените его?", "10/10");

personalMovieDB.movies = {
    lastWatchedFilm: rateFilm
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;
