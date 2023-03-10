/* REACTIVIDAD GLOBAL */

const montarRrss = (path = '') => {
  const footer = document.querySelector('footer')

  for (red of redes) {
    const link = document.createElement('a')
    link.setAttribute('href', red.link)
    
    footer.appendChild(link)
    
    const elem = document.createElement('img')
    elem.setAttribute('src', path+'/images/socials/'+red.img)
    elem.setAttribute('alt', red.nombre)
    elem.setAttribute('title', red.nombre)
    elem.style.height = '35px'
    elem.style.margin= '0 10px'

    link.appendChild(elem)
  }

}

const test = () => {
  console.log([...redes])
}

const montarTarjeta = (container, path) => {
  //creamos tarjeta
  const card = document.createElement('div')
  card.className = 'card'

  //introducimos los datos que queremos en la tarjeta
  const img = document.createElement('img')
  img.className = 'card-img'
  img.setAttribute('src', path+producto.img)
  img.setAttribute('alt', producto.nombre)
  img.setAttribute('title', producto.nombre)

  card.appendChild(img)

  const titulo = document.createElement('h5')
  titulo.innerText = producto.nombre

  card.appendChild(titulo)

  const precio = document.createElement('h5')
  precio.innerText = producto.precio + ' €'

  card.appendChild(precio)

  //añadimos la tarjeta a las ofertas
  container.appendChild(card)
}

const montarOfertas = () => {
  //randomizamos la lista de artículos
  const productos = [...articulos]
                    .sort((a, b) => Math.random() >= 0.5 ? -1 : 1)
  //cogemos 8 para crear la página principal
                    .splice(0, 8)

  //definimos el contenedor para las tarjetas
  const container = document.getElementById('ofertas')

  for (producto of productos) {
    montarTarjeta(container, '../images/articles/')
  }  
}

const montarProductos = (category = '') => {
  const productos = [...articulos]
    .filter(e => e.categorias.indexOf(category) !== -1 || category == '')
  //definimos el contenedor para las tarjetas
  const container = document.getElementById('productos')

  console.log(productos)
  
  for (producto of productos) {
    montarTarjeta(container, '../images/articles/')
  } 
}