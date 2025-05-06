//Задания на массивы объектов

'use strict';
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

//возвращает массив объектов, у которых рейтинг >= 8
function showGoodFilms(arr){
    const shortFilms = arr.filter(film => film.rating>=8);
        return shortFilms;
};
showGoodFilms(films);

//возвращает строку названий фильмов через запятую
function showListOfFilms (arr) {
    const filmNames = arr.map(film => film.name);
    console.log(filmNames.join(", "));
    return filmNames;
};
showListOfFilms(films);

//возвращает массив с новым полем id по нумерации
    const setFilmsIds = (arr) => {
    const copyArr = [...arr];
    for (let i=0;i<arr.length;i++) {
        arr[i]["id"] = i+1;
    }
    return copyArr;
};
const transformedArray = setFilmsIds(films);

//проверяет, что в каждом фильме есть поле id
function checkFilms(arr) {
    let hasId = true;
    arr.forEach(film => {
        if(film.hasOwnProperty("id")){
            hasId=true;
        } else hasId = false;
    }
);
return hasId;
}
console.log(checkFilms(transformedArray));