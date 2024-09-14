const saludarPersona = (nombre, idioma = 'es') => {
    switch (idioma) {
        case 'es':
            return `Hola, ${nombre}`;
    }
};
console.log(saludarPersona('Juan'));