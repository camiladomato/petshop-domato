 const data = fetch('https://apipetshop.herokuapp.com/api/articulos') 
.then(repuesta=>repuesta.json())
.then(data=>miPrograma(data))
.catch(error=>console.log(error))


function miPrograma(data){
    
    let articulosFarmacia = data.response.filter((articulo)=> articulo.tipo == "Medicamento");
    let articulosJugueteria= data.response.filter((articulo)=> articulo.tipo== "Juguete");
    
    console.log(articulosJugueteria);
    console.log(articulosFarmacia);

    const jugueteria = document.getElementById("articulos-jugueteria");
    const farmacia= document.getElementById("articulos-farmacia");
    
    // const articulosSeleccionadosF=articulosFarmacia.filter(articulo=>articulo.seleccionado);
    // const articulosSeleccionadosJ=articulosJugueteria.filter(articulo=>articulo.seleccionado);
    
    ///data.response.forEach((producto)=>{producto.seleccionado=false})
    
    function dibujarTabla(identificador,array){ //cree una funcion que recibe 2 parametros
        array.map((articulo)=>{ //1er parametro es un identificador , donque quiero imprimir.
            if(articulo.stock>5){ //el 2do parametro array filtrado para sectorizar los articulos
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <p class="titulo-carta">${articulo.nombre}</p> 
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p class="negrita">Precio: $${articulo.precio}</p>
                
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${articulo._id}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${articulo._id}" aria-expanded="false" aria-controls="collapse${articulo._id}">
                         Descripcion
                    </button>
                    </h2>
                    <div id="collapse${articulo._id}" class="accordion-collapse collapse" aria-labelledby="heading${articulo._id}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <p class="descripcion">${articulo.descripcion}<p></div>
                    </div>
                </div>
                <div>
                <a href="carrito.html"></a><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"> 
                </div>
            </div>
            </div>`
            }
            else{
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <p class="titulo-carta">${articulo.nombre}</p>
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p class="negrita">Precio: $${articulo.precio}</p>
                    
                <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading${articulo._id}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${articulo._id}" aria-expanded="false" aria-controls="collapse${articulo._id}">
                            Descripcion
                        </button>
                    </h2>
                    <div id="collapse${articulo._id}" class="accordion-collapse collapse" aria-labelledby="heading${articulo._id}" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        <p class="descripcion">${articulo.descripcion}<p></div>
                    </div>
                </div>
                <div>
                <a href="carrito.html"></a><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"> 
                </div>
                </div>
                <div>
                    <p id="oferta"> ULTIMOS EN STOCK </P>
                </div>
        
            </div>`
            }  
        })
    }

    if (farmacia){
        dibujarTabla(farmacia,articulosFarmacia);
    }
    
    if (jugueteria){
        dibujarTabla(jugueteria,articulosJugueteria);
    }
   
    
    //check de cada item de formulario
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'//contexto extricto de script5
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()//veni con boostrap , evita que la pagina se resetea a cada rato
            event.stopPropagation()
          }
          
          if(form.checkValidity()){//agregue para validar , evito que se resetee con prevent 
            event.preventDefault()
            Swal.fire({//y agregue la alerta
                
                icon: 'success',
                title: 'Tu formulario se envio con Exito',//alerta
                showConfirmButton: false,
                timer: 1500
              })
            setTimeout(function(){
                location.href ="/contactenos.html"//redirige a contactenos

            },1500)    
          }

          form.classList.add('was-validated')//venia con boostrap , averigue y carga los datos al backen
         
        }, false)
      })
  })()

  
  
















}//cierre de progama



















    //CARRITO
    // function TablaSeleccionados(array){
    //     if(array.length === 0){
    //         document.getElementById("seleccionado-para-comprar").innerText=
    //         "A??n No selccionaste ningun producto"
    //     }
    //     else{
    //         array.map(articulo=>{
    //         const contenedor= document.createElement('div')
    //         contenedor.className= "articuloSeleccionado"
    //         contenedor.innerHTML=`
    //         <h3>${articulo.nombre}</h3>
    //         <img src="${articulo.imagen}" alt="">
    //         <p>Precio: $${articulo.precio}</p>
    //         <button id="${articulo.id}">
    //                 <a href="carrito.html"></a>
    //             </button>`

    //         document.getElementById("seleccionado-para-comprar").appendChild(contenedor)
    //         document.getElementById(articulo.id).addEventListener("click",(e)=>{
    //             const idBoton = e.target.id
    //         })
    //     })
    // }

// TablaSeleccionados(articulosFarmacia)
// TablaSeleccionados(articulosJugueteria)

    



    
   





