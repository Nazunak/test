// let numberOfFilms;
// numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотреных фидьмов?', '' );
// const b = +prompt('На сколько оцените его', '' );
// const c = prompt('Один из последних просмотреных фидьмов?', '' );
// const d = +prompt('На сколько оцените его', '' );

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// let temperatyra = -3;

// if (temperatyra > 0) {
//     console.log("teplo")
// } else {
//     console.log("cold")
// };

let a = '';
let lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        a += '*';
    }
    
    a += '\n';
}

console.log(a);

