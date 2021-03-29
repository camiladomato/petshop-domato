 const data = fetch('https://apipetshop.herokuapp.com/api/articulos') 
.then(repuesta=>repuesta.json())
.then(data=>miPrograma(data))
.catch(error=>console.log(error))


function miPrograma(data){
    
    let articulosFarmacia = data.response.filter((articulo)=> articulo.tipo == "Medicamento");
    let articulosJugueteria= data.response.filter((articulo)=> articulo.tipo== "Juguete");
    
    const jugueteria = document.getElementById("articulos-jugueteria");
    const farmacia= document.getElementById("articulos-farmacia");
    
    // data.map((articulo)=>{articulo.seleccionado=false});
  
    // const articulosSeleccionadosF=articulosFarmacia.filter(articulo=>articulo.seleccionado);
    // const articulosSeleccionadosJ=articulosJugueteria.filter(articulo=>articulo.seleccionado);
    
    
    function dibujarTabla(identificador,array){ 
        array.map((articulo)=>{
            if(articulo.stock>5){
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <h3>${articulo.nombre}</h3>
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p>Precio: $${articulo.precio}</p>
                <p>Stock Disponible: ${articulo.stock}</p>
                <div>
                <a href="carrito.html"><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"></a>
            </div>

                </div>`
            }
            else{
                identificador.innerHTML +=`
            <div class="carta-articulos">
                <h3>${articulo.nombre}</h3>
                <div class="zoom"><img src="${articulo.imagen}" alt=""></div>
                <div class="precio-stock">
                <p>Precio: $${articulo.precio}</p>
                <p>Stock Disponible: ${articulo.stock}</p>
                <div>
                    <a href="carrito.html"><img src="img/boton-carrito.png" id="imagen-carrito" alt="carrito-perrito"></a>
                </div>
                </div>
                <p id="oferta"> ULTIMOS EN STOCK </P>
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
    //cartelito para formulario-pagina contactenos
    
    document.getElementById('verificado').addEventListener('click',()=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Enviaste el formulario.¡Muchas Gracias por escribirnos! ',
            showConfirmButton: false,
            timer: 1500
          }) 
       
    })

var contador= []





        

       
      

    
}


