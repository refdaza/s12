

const url1 = 'https://pokeapi.co/api/v2/generation/1/'
const selector = document.getElementById('selector')
fetch(url1)
.then(Response=>Response.json())
.then(data1=>{
    for(index in data1.pokemon_species){
        selector.innerHTML += "<option value="+data1.pokemon_species[index].name+">"+data1.pokemon_species[index].name+"</option>"
    }
    
})


const cambiar = document.getElementById('cambiar')
const url = 'https://pokeapi.co/api/v2/pokemon/'
const generadorNumberPokemon = ()=> {
    // let id = Math.floor(Math.random() * 150) + 1;
    let id = selector.value
    console.log(id);
    const nuevoUrl = url + id
    console.log(nuevoUrl);

    fetch(nuevoUrl)
    .then(Response=> Response.json())
    .then(data=>{
        const nombre = document.getElementById('nombre')
        const card = document.getElementById('card')
        card.innerHTML = `<img src='${data.sprites.front_default}'/>
        `
        nombre.innerHTML = `${data.name}`
    })
}

cambiar.addEventListener("click", generadorNumberPokemon)

