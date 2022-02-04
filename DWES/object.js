let movie = {
    title: "E.T.",
    director :{
        name: "Steven",
        surname: "Spielberg"
    }
}

console.log(movie.title, movie.director.name);

let movies = [];

// movies.push(movie);

// // movies.forEach((e)=> {console.log(e.title)});

// // movie.title = "Star Wars";
// // movie.director.name = "George";
// // movie.director.surname = "Lucas";

// // movies.push(movie);

// // movies.forEach((e) => {console.log(e)});

let movie2 = {
    title: "Star Wars",
    director :{
        name: "George",
        surname: "Lucas"
    }
}

movies.push(movie, movie2);

movies.forEach((e) => {console.log(e.title)});

const addMovies = (title, name, surname) => {
    let movie = {
        titulo: title,
        nombre: name,
        apellido: surname
    }
    return movie;
}

console.log(addMovies("Et", "Steven", "Spielberg"));

function movie3(name, directorName, directorSurname) {
    this.title = name;
    this.director = {
        nombre: directorName,
        apellido: directorSurname
    }
}

movies.push(new movie3("Et", "Steven", "Spielberg"));
movies.push(new movie3("Star Wars", "George", "Lucas"));

movies.forEach((e) => {console.log(e.title)});