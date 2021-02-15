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
	filtrarM();
});
color.addEventListener('change', (e) => {
	datoDeBusqueda.color = e.target.value;
	filtrarM();
});
tipo.addEventListener('change', (e) => {
	datoDeBusqueda.tipo = e.target.value;
	filtrarM();
});
talla.addEventListener('change', (e) => {
	datoDeBusqueda.talla = e.target.value;
	filtrarM();
});
precio.addEventListener('change', (e) => {
	datoDeBusqueda.precio = e.target.value;
	filtrarM();
});

//Funciones
getResultado();
function getResultado() {
	ropa.forEach((conjunto) => {
		const { marca, precio, talla, color, tipo } = conjunto;
		const lista = document.createElement('p');
		lista.innerHTML = `
     -<b>Marca:</b> ${marca}  - <b>Color:</b>  ${color} - <b>Tipo:</b> ${tipo}   - <b>Precio:</b> ${precio} - <b>Talla:</b> ${talla}- <hr class="hr">
    `;
		resultados.appendChild(lista);
	});
}
//Funcion de FiltrarMarca
function filtrarM() {
	const resultado = ropa
		.filter(filtrarMarca)
		.filter(filtrarColor)
		.filter(filtrarTipo)
		.filter(filtrarTalla)
		.filter(filtrarPrecio);

	console.log(resultado);
	eliminaHTML(); //BORRA HTML
	resultado.forEach((conjunto) => {
		const { marca, precio, talla, color, tipo } = conjunto;
		const lista = document.createElement('p');
		lista.innerHTML = `
     <b>Marca:</b> ${marca} - <b>Precio:</b> ${precio} - <b>Talla:</b> ${talla} - <b>Color:</b> - ${color} - <b>Tipo:</b> ${tipo} <hr class="hr">
    `;
		resultados.appendChild(lista);
	});
}
//MARCA
function filtrarMarca(marcas) {
	if (datoDeBusqueda) {
		return marcas.marca === datoDeBusqueda.marca;
	}
	return marcas;
}

function filtrarColor(marcas) {
	if (datoDeBusqueda.color) {
		return marcas.color === datoDeBusqueda.color;
	}
	return marcas;
}

function filtrarTipo(marcas) {
	if (datoDeBusqueda.tipo) {
		return marcas.tipo === datoDeBusqueda.tipo;
	}
	return marcas;
}
function filtrarTalla(marcas) {
	if (datoDeBusqueda.talla) {
		return marcas.talla === datoDeBusqueda.talla;
	}
	return marcas;
}
function filtrarPrecio(marcas) {
	if (datoDeBusqueda.precio) {
		return marcas.precio <= datoDeBusqueda.precio;
	}
	return marcas;
}
//BORRA HTML
function eliminaHTML() {
	while (resultados.firstChild) {
		resultados.removeChild(resultados.firstChild);
	}
}
