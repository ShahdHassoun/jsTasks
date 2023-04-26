let section =document.getElementById("container")
function clickfun(para){
    para.style.position="relative";
   para.style.animation="mynewmove .2s 2";
}
async function get(){
    let response= await fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
    let data= await response.json();
    let arr=data.results;
    for(let i=0;i<arr.length;i++){
    section.innerHTML+=`<div class="pokemon-sec" onclick="clickfun(this)"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"/><h3>${arr[i].name}</h3></div>`;
    }
}
get();

