const url = "https://rickandmortyapi.com/api/character";
const Http = new XMLHttpRequest();
Http.open('GET', url);
 var personajes 
Http.onreadystatechange = function(){
  if(this.readyState == 4 && this.status == 200){
    var resultado = JSON.parse(this.responseText);
      personajes = resultado.results
      console.log(personajes)
    personajes.forEach(res =>{
       document.querySelector('.targetas').innerHTML += `
      <div class="targeta">
          <div class="img">
              <img src="${res.image}">
          </div>
          <div>
            <h1>Nombre: ${res.name}</h1>
             <h2>Especie: ${res.species}</h2>
             <h3>Estado: ${res.status}</h3>
              <h2>Episodios: ${res.episode.length}</h2>
          </div>
      </div>
`
    })
   
  }
}

Http.send()

function busca(event){
  console.log(event)
  let re = new RegExp(event, "i");
  const resultado = personajes.filter(personaje => personaje.name === event);
  resultado.forEach(res =>{
     document.querySelector('.resultado').innerHTML = `
      <div class="targeta">
          <div class="img">
              <img src="${res.image}">
          </div>
          <div>
            <h1>Nombre: ${res.name}</h1>
             <h2>Especie: ${res.species}</h2>
             <h3>Estado: ${res.status}</h3>
              <h2>Episodios: ${res.episode.length}</h2>
          </div>
      </div>
`
  })
}

function abrir(){
 document.querySelector('.resultados').classList.add("star");
}
function cerrar(){
 document.querySelector('.resultados').classList.remove("star");
}