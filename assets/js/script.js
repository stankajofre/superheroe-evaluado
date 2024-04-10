let token = 4905856019427443;

//dom
$(document).ready(function () {
    const elementoInputDelHtml = $("#id_superheroe");
    const botonDeBusqueda = $("#botonBusqueda");

    botonDeBusqueda.on("click", function () {
        let valorDelImput = elementoInputDelHtml.val()

        //validar que el valor de imput solo sea numero
        if (valorDelImput && !isNaN(valorDelImput)) {
            console.log("El imput no esta vacio")

            consultarAlaApi(valorDelImput);
        } else {
            console.log("El input esta vacio")
        }

    });

    function consultarAlaApi(idDelSuperheroe) {
        let url = `https://www.superheroeapi.com/api.php/${token}/${idDelSuperheroe}`

        $.ajax({
            url: url,
            method: "get",
            dataTyoe: "json",
            success: function (resultado) {
                console.log(resultado);

            }

        })
    }






















});

