function getCharacters(done){ 
    /*Funcion que se llamara cuando se complete la solicitud de la api*/

    const results=fetch("https://rickandmortyapi.com/api/character"); 
    /*Se hace una solicitud 
    GET a la API para que me traiga los personaje*/

    results
    .then(response =>response.json())/* respuesta de la API en JSON*/
    .then(data =>{ 
        done(data) 
    }); 
/* funcion (callback-'done') datos de la API*/
}

getCharacters(data =>{ /*(getCharacters) procesar los datos*/
    
    data.results.forEach(personaje => { /*Itera la lista de personajes y los convierte en un article*/
        const article=document.createRange().createContextualFragment(/*Crea el html con la info de los personajes*/
          /* article Contenedor de personaje */ `
     <article>

            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje">
            </div>


    <h2>${personaje.name}</h2>
    <h2>${personaje.status}</h2>
    <h2>${personaje.species}</h2>
    <h2>${personaje.gender}</h2>
    <h2>${personaje.id}</h2>
            
        </article>    
            `);
        /*La informacion que quiero que traiga de la API*/
        
        const main=document.querySelector("main");
        main.append(article); /*Me agrega el article al main que cree en HTML para q se muestre */
        
    });
});