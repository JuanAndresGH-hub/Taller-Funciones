function obtenerFechaActual(){
    let fecha = new Date();
    return fecha.toDateString();
}
let fechaActual = obtenerFechaActual();
console.log(fechaActual);
