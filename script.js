let libros = [];


function Libro(titulop,autorp,fechap,generop,isbnp){
    this.titulo = titulop
    this.autor = autorp;
    this.fecha = fechap;
    this.genero = generop;
    this.isbn = isbnp;
}

function agregarLibro(){
    let elementoTitulo = document.getElementById("tituloLibro").value;
    let elementoAutor = document.getElementById("autorLibro").value;
    let elementoFecha = document.getElementById("fechaPublicacion").value;
    let elementoGenero = document.getElementById("generoLibro").value;
    let elementoIsbn = document.getElementById("isbn").value;
    let elementoUL = document.getElementById("librosEnPantalla");
    let elementoLI = document.createElement("li");

    if(elementoTitulo.trim() === "" || elementoAutor.trim() === "" || elementoFecha === "" || elementoGenero.trim() === "" || elementoIsbn.trim() === ""){
       alert("Es obligatorio que todos los campos deben estar completados")
       return;
    }

    let newLibro = new Libro(elementoTitulo,elementoAutor,elementoFecha,elementoGenero,elementoIsbn);
    libros.push(newLibro);
    let botonEliminar = document.createElement("button");
    botonEliminar.innerText = "Eliminar";
    botonEliminar.onclick = function(){
        elementoUL.removeChild(elementoLI);
    };
    
    let nodoLibro = document.createTextNode(`Titulo: ${newLibro.titulo}, Autor: ${newLibro.autor}, Fecha: ${newLibro.fecha}, Genero: ${newLibro.genero}, ISBN: ${newLibro.isbn}`);
    elementoLI.appendChild(nodoLibro);
    elementoLI.appendChild(document.createTextNode(" "));
    elementoLI.appendChild(botonEliminar);
    elementoUL.appendChild(elementoLI);
    //esto muestra el .listado de css, si hay libros
    document.querySelector('.listado').style.display = 'block';
    alert("Libro agregado exitosamente!");
    limpiarEspacios();
}

function limpiarEspacios(){
    document.getElementById("tituloLibro").value = "";
    document.getElementById("autorLibro").value = "";
    document.getElementById("fechaPublicacion").value = "";
    document.getElementById("generoLibro").value = "";
    document.getElementById("isbn").value = "";
}

function mostrarLibros(){
    let listado = "";
    for(let cadaLibro of libros){
        listado += `Libro: ${cadaLibro.titulo}, Autor: ${cadaLibro.autor}, Fecha de Publicacion: ${cadaLibro.fecha}, Genero: ${cadaLibro.genero}, ISBN: ${cadaLibro.isbn}`;
        listado += "\n";
    }
    alert(listado);
}
