let Titulo = document.title;

window.addEventListener('blur', () => {
    document.title = "No te vayas Papu";
})

window.addEventListener('focus', () => {
    document.title = Titulo;
})

const UrlApi = 'https://api.chucknorris.io/jokes/random';

const Chiste = () => {
    fetch(UrlApi)
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: "Chiste Random",
                html: `<span class="text-secondary"> ${data.value}</span>`,
                icon: "question",
                confirmButtonText: "Volver",
                footer:
                '<span class="text-secondary"> Gracias por reirte :) </span>',
                allowOutsideClick: false,
                buttonsStyling: false,
                customClass: {
                    popup: "bg-dark rounded-5",
                    confirmButton: "btn btn-outline-light"
                },
            })
        })
        .catch(error => {
            console.log(error.message);
        })
}

function CambiarTema() {
    const Pagina = document.querySelector("html");
    const Icono = document.querySelector("#icon");

    Pagina.setAttribute("data-bs-theme", Pagina.getAttribute("data-bs-theme") === "light" ? "dark" : "light");
    Icono.setAttribute("class", Pagina.getAttribute("data-bs-theme") === "light" ? "bi bi-moon-stars-fill" : "bi bi-sun-fill");
}

function ActualizarHora() {
    let ConHora = document.getElementById('Hora');
    let ConFecha = document.getElementById('Fecha');

    const Fecha = new Date();
    const Hora = Fecha.getHours();
    const Minutos = Fecha.getMinutes();
    const Segundos = Fecha.getSeconds();

    const Dia = Fecha.getDate();
    const Mes = Fecha.getMonth() + 1;
    const Año = Fecha.getFullYear();

    let HoraActual = Hora + ':' + (Minutos < 10 ? '0' : '') + Minutos + ':' + (Segundos < 10 ? '0' : '') + Segundos;

    let FechaActual = Dia + '/' + Mes + '/' + Año;

    ConFecha.textContent = FechaActual;
    ConHora.textContent = HoraActual;
}

setInterval(ActualizarHora, 1000);

ActualizarHora();