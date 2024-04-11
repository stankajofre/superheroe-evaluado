let token = 4905856019427443;

//dom
$(document).ready(function () {
    const elementoInputDelHtml = $("#id-superheroe");
    const botonDeBusqueda = $("#boton-busqueda");

    botonDeBusqueda.on("click", function () {
        let valorDelInput = elementoInputDelHtml.val()

        //validar que el valor de imput solo sea numero
        if (valorDelInput && !isNaN(valorDelInput)) {
            console.log("El input no esta vacio")

            consultarAlaApi(valorDelInput);
        } else {
            console.log("El input esta vacio")
        }

    });

    function consultarAlaApi(idDelSuperheroe) {
        let url = `https://www.superheroapi.com/api.php/${token}/${idDelSuperheroe}`

        $.ajax({
            url: url,
            method: "get",
            dataTyoe: "json",

            success: function (resultado) {
                let templateDeTarjeta =
                    ` <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${resultado.image.url}"
                             class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${resultado.name}</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>`;
                $("#resultado").append(templateDeTarjeta);
            }


        })
    }






















});

