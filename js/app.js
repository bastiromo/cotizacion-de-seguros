// Constructores

function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;

}

class UI {
    constructor() { }
    // llena las opciones de los años
    llenarOpciones() {

        const max = new Date().getFullYear(), min = max - 20;

        const selectYear = document.querySelector('#year');

        for (let i = max; i >= min; i--) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            selectYear.appendChild(option);
        }
    }
    // muestra alertas en pantalla
    mostrarMensaje(mensaje, tipo) {
        const div = document.createElement('div');
        if (tipo === 'error') {
            div.classList.add('error');
        } else {
            div.classList.add('correcto');
        }

        div.classList.add('mensaje', 'mt-10');
        div.textContent = mensaje;

        //Insertar en el html
        const formulario = document.querySelector('#cotizar-seguro');
        formulario.insertBefore(div, document.querySelector('#resultado'));
        setTimeout(() => {
            div.remove();
        }, 2000);


    }
}





// Instanciar UI
const ui = new UI();



document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años...

})


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;


    // Leer el año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if (marca === '' || year === '' || tipo === '') {
        ui.mostrarMensaje('Todos los campos son obligatorios', 'error');
        return;
    } 
    ui.mostrarMensaje('Cotizando...', 'exito');
    
    // instanciar el seguro

    // utilizar el prototype que va a cotizar
    

}
