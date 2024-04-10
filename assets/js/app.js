4905856019427443

//dom
$(document).ready(function () { // ojo revisar el cierre de la etiqueta en rojo revisar el boton clck segun el ejemplo del profe 
    const superForm = $('#superForm')
    const superNumber = $('#superNumber')
    const superResult = $('#superResult')
    const chartContainer = $('#chartContainer')

    // Función para buscar un superhéroe por número
    function buscarSuperHeroe(superNumber)
    // URL de la API
    var apiUrl = `https://www.superheroapi.com/api/10232835397164510/${superNumber}`;// revisar el lionk de la api

    // Realizar la solicitud GET a la API
    $.get(apiUrl, function (data))
    // Mostrar los resultados en la consola
    console.log(data);



