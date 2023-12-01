// Crear las constantes del html
user=document.querySelector('#btnUser'),
searBar= document.querySelector('#searchConge')


 //constantes del filtro

 const precio=document.querySelector('#precio'),
 unidades=document.querySelector('#unidades'),
 categoria=document.querySelector('#categoria')

 //constantes botones:





 // constantes login

 const nombre= document.querySelector('#name'),
 apellido= document.querySelector('#lastname'),
 mail= document.querySelector('#email'),
 fecha=document.querySelector('#date'),
 mensaje= document.querySelector('#message'),
 btnLogin= document.querySelector('#submitLogin')

 //Crear un array con los elementos del menú de congelados

 const congelados= [
 {id:01,menu:"Arroyaditos de primavera", unidades: 6, precio: 350},
 {id:02, menu:"Tequeños de queso llanero",unidades:8,precio:350},
 {id:03, menu:"Tequeños de plátano y queso",unidades: 8, precio:400},
 {id:04,menu:"Hamgurguesa Vegana",unidades:2,precio:200},
{id:05,menu:"Pan de queso",unidades:2,precio:150},
{id:06,menu:"Falafel",unidades:5,precio:200},
 ]

 //Función de congelados

 function ConGarza(menu,unidades,precio){
    this.id=congelados.length+1;
    this.menu=menu;
    this.unidades=parseFloat(unidades);
    this.precio=parseFloat(precio);
}

//Crear una función de busqueda

const searchInput = document.querySelector('#searchConge1');
const serviceBoxes = document.querySelectorAll('.service-box');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  serviceBoxes.forEach((serviceBox) => {
    const content = serviceBox.textContent.toLowerCase();

    content.includes(query) ? serviceBox.style.display = 'block' : serviceBox.style.display = 'none';
  });
});

//Crear un eventListener que al darle click al botón agregar se refleje en el icono de carro
const btnAgregar = document.querySelectorAll('#agregar');

btnAgregar.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let currentCount = parseInt(document.getElementById('btnShop').getAttribute('data-count')) || 0;
    document.querySelector('#btnShop').setAttribute('data-count', currentCount + 1);
    document.querySelector('#btnShop').innerHTML = '(' + (currentCount + 1) + ')';
  });
});


//USAR EL FILTRO DE LOS CHECK BOX

const btnPrecioF=document.querySelector('#precioFilter'),
btnCategoF=document.querySelector('#categoFilter'),
btUnits=document.querySelector('#unitFilter')
btnnameF=document.querySelector('#nameFilter');

precioFilter.addEventListener('change',() =>{
    filterMenu('precio');
});

unitFilter.addEventListener('change',() =>{
    filterMenu('unidades');
});


categoriaFilter.addEventListener('change',()=>{
    filterMenu('categoria');
});

nameFilter.addEventListener('change',()=>{
    filterMenu('nombre');
})

//Crear una función para filtrar

function filterMenu(filterOption) {
    serviceBoxes.forEach((serviceBox) => {
      const content = serviceBox.querySelector(`#${filterOption}`).textContent.toLowerCase();
      const query = searchInput.value.toLowerCase();
  
      const isMatched = filterOption === 'precio'
        ? query !== '' && parseFloat(content.replace('$', '')) >= parseFloat(query)
        : content === filterOption;
  
      serviceBox.style.display = isMatched ? 'block' : 'none';
    });
  }