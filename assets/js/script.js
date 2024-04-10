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
                let templateDeTarjeta =
                    `<div class="card mb-3" style="max-width: 540px;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="..." class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Nombre del Superheroe</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.</p>
                                    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>`
                $("#resultado").append(templateDeTarjeta);
            }

        })
    }






















});

