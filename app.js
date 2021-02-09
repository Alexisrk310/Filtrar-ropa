//Variables
const marca = document.querySelector('#marca');
const color = document.querySelector('#colores');
const tipo = document.querySelector('#tipo');
const talla = document.querySelector('#talla');
const precio = document.querySelector('#precio');
const resultados = document.querySelector('main');
//Objeto
const datoDeBusqueda = {
	marca: '',
	color: '',
	tipo: '',
	talla: '',
	precio: '',
};
//Eventos de los select
marca.addEventListener('change', (e) => {
	datoDeBusqueda.marca = e.target.value;
	filtrarMarca();
});
color.addEventListener('change', (e) => {
	datoDeBusqueda.color = e.target.value;
});
tipo.addEventListener('change', (e) => {
	datoDeBusqueda.tipo = e.target.value;
});
talla.addEventListener('change', (e) => {
	datoDeBusqueda.talla = e.target.value;
});
precio.addEventListener('change', (e) => {
	datoDeBusqueda.precio = e.target.value;
	console.log(datoDeBusqueda);
});

//Funciones
getResultado();
function getResultado() {
	ropa.forEach((conjunto) => {
		const { marca, precio, talla, color, tipo } = conjunto;
		const lista = document.createElement('p');
		lista.innerHTML = `
     <b>Marca:</b> ${marca} - <b>Precio:</b> ${precio} - <b>Talla:</b> ${talla} - <b>Color:</b> - ${color} - <b>Tipo:</b> ${tipo} <hr class="hr">
    `;
		resultados.appendChild(lista);
	});
}
//Funcion de FiltrarMarca
function filtrarMarca() {
	const resultados = datoDeBusqueda.filter();
}
