const $=(selector)=>document.querySelector(selector);
const baseURL='https://rickandmortyapi.com/api';
const btn=$('#consumir')
const contenedor=$('.container');
const contenedor2=$('.container2');

/*btn.addEventListener('click',async()=>{
    const resp=await fetch(`${baseURL}/character`)
    const {results}=await resp.json();
    let html='';
    results.forEach(personaje => {
       html+=
      ` <img src="${personaje.image}" alt="">`
       
    });
    contenedor.innerHTML=html;
})*/

btn.addEventListener('click',async()=>{
    const resp=await fetch(`${baseURL}/character`)
    const {results}=await resp.json();
    let html='';
    results.forEach(personaje => {
        html+=
      `
      <div class="Datos">
      <h1> Nombre:"${personaje.name}" </h1>
      <img src="${personaje.image}" alt="">
      <h2> Status:"${personaje.status}" </h2>
      <h2> Specie:"${personaje.species}" </h2>
      <h2> Genero:"${personaje.gender}" </h2>
      </div>
      `   
    });
    contenedor.innerHTML=html;
})
