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

// let a = '';
// let lenght = 7;

// for (let i = 1; i < lenght; i++) {

//     for (let j = 0; j < i; j++) {
//         a += '*';
//     }

//     a += '\n';
// }

// console.log(a);


// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// for (let i = 5; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 13) break;
//     console.log(i)
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// const arr = [];

// for (i = 5; i <= 10; i++) {
//     arr[i - 5] = i;    
// }
// console.log(arr);
// return arr;

// let numberOfFilms = +prompt('skolko posmotreli?');

// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }


// for (i = 0; i < 2; i++) {
//     let a = prompt('odin iz poslednih filmov?');
//     let b = prompt('ocenite');

//     personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);

// let numberOfFilms = +prompt('skolko posmotreli filmov?', '');
// let personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('odin iz poslednih filmov?', '');
//     let b = +prompt('na skolko ocenite ego?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         i--;
//     }   
// }

// if (personalMovieDB.count < 10) {
//     console.log('malo');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('klassic');
// } else if (personalMovieDB.count >= 30) {
//     console.log('kinoman');
// } else {
//     console.log('error');
// }


// const usdCurr = 37;
// const euCurr = 40;
// const ruCurr = 2;

// let kollichestvo = +prompt('skolko perevesti?', '');
// let currency = prompt('choose currency', 'usd or eu');

// function convert(kollichestvo, rate) {
//     return rate * kollichestvo;
// }

// if (currency === 'usd') {
//     let result = 'EUR=' + convert(kollichestvo, euCurr);
//     result += 'RU=' + convert(kollichestvo, ruCurr);
//     alert(kollichestvo + ' ' + currency + ' ' + result);
// }

// convert(kollichestvo, usdCurr);
// convert(kollichestvo, euCurr);
// convert(kollichestvo, ruCurr);

// const usdCurr = 37;
// const euCurr = 40;

// let quantity = +prompt('Vvedit kilkist dlia perevody v gruvni', '')
// let currency = prompt('Vvedit valuty', 'usd or eu');

// function convert(quantity, currency) {
//     return quantity * currency;
// }

// if (currency === 'usd') {
//     let result = 'usd' + ': ' + convert(quantity, usdCurr);
//     alert(result);
// }

// if (currency === 'eu') {
//     let result = 'eu' + ': ' + convert(quantity, euCurr);
//     alert(result);
// }

// function sayHello(userName) {
//     return `Privet, ${userName}`;
// }

// sayHello('Petia');

// function returnNeighboringNumbers(number) {
//     return [number - 1, number, number + 1];
// }

// returnNeighboringNumbers(5);
// console.log(returnNeighboringNumbers(5));

// function getMathResult(firstNumber, secondNumber) {
//     return (firstNumber * 2);
// }



// getMathResult(3);
// console.log(getMathResult(3));


// let sliceWord = "lorem cringe";

// console.log(sliceWord.length);
// console.log(sliceWord.slice(0, 4));






let numberOfFilms;

function start() {
    numberOfFilms = +prompt('skolko posmotreli filmov?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('skolko posmotreli filmov?', '');
    }
}

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
}

// console.log(Object.keys(personalMovieDB).length);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('odin iz poslednih filmov?', '');
        let b = +prompt('na skolko ocenite ego?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }   
    }
}

// rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('malo');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('klassic');
    } else if (personalMovieDB.count >= 30) {
        console.log('kinoman');
    } else {
        console.log('error');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);


let uGenres;

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        uGenres = prompt(`ваш любимий жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = uGenres;
    }
    console.log(personalMovieDB);
}

// writeYourGenres();



let volume;
let area;

function calculateVolumeAndArea(lenght) {
    if (typeof(lenght) !== 'number' || lenght < 0 || !Number.isInteger(lenght)) {
        return 'error'
    }
    let volume = lenght * lenght * lenght;
    let area = 6 * (lenght * lenght);
    return `obem: ${volume}, plo: ${area}`;
}

// console.log(calculateVolumeAndArea(2));




function getCoupeNumber(numberCupe) {
    if (typeof(numberCupe) == 0 || numberCupe > 36) {
        return 'nety takih mest';
    }

    if (typeof(numberCupe) !== 'number' || numberCupe < 0 || !Number.isInteger(numberCupe)) {
        return 'error, proverte mesto';
    }
    return Math.ceil(numberCupe / 4);

}

// console.log(getCoupeNumber(1));



function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

// console.log(getCoupeNumber(1));



function getTimeFromMinutes(time) {
    if (typeof(time) !== 'number' || time < 0 || !Number.isInteger(time)) {
        return "Ошибка, проверьте данные"
    }

    let hour = Math.floor(time / 60);
    let minutes = time % 60;
    let timeStr = '';

    switch (hour) {
        case 0:
            timeStr = 'годин';
            break;
        case 1:
            timeStr = 'година';
            break;
        case 2:
            timeStr = 'години';
            break;
        case 3:
            timeStr = 'години';
            break;
        case 4:
            timeStr = 'години';
            break;
        case 5:
            timeStr = 'годин';
            break;
    }

    return `Це ${hour} ${timeStr} і ${minutes} хвилин`;

}

// console.log(getTimeFromMinutes(180));


function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    }

    let maxNum = Math.max(a, b, c, d);
    return maxNum;
}

// console.log(findMaxNumber(1, '2', 3, 4));

function fib() {

}

// fib();

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    let {exp} = plan.skills;
    return exp;
}

// console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `sdf ${key} bpdexy yf ${programmingLangs[key]}\n`
    }
    return str;
}

// console.log(showProgrammingLangs(personalPlanPeter));

