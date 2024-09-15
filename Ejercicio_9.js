let saludarFlecha = (nombre, idioma = 'es') => {
    switch (idioma) {
        case 'es':
            return `Hola, ${nombre}!`;
    }
};
console.log(saludarFlecha('Juan'));
console.log(saludarFlecha('Maria', 'es'));


function saludar(nombre, idioma = 'es') {
    switch (idioma) {
        case 'es':
            return `Hola, ${nombre}!`;
    }
}
console.log(saludar('Juan'));
console.log(saludar('Maria', 'en'));
