let section =document.getElementById("container");
let whencl=document.getElementById("whencl");
function hoverfun(para){
    para.style.position="relative";
   para.style.animation="mynewmove .2s 2";
}
function closeOverlay(){
    whencl.style.zIndex=-1;
    whencl.style.opacity='0';
    whencl.innerHTML='';
}
async function clickfun(url,imgn){
    let response= await fetch(url);
    let data= await response.json();
    let types=data.types;
    let type='';
    for(let i=0;i<types.length;i++){
        
         type+=types[i].type.name;
         if(i<types.length-1){
            type+=',';
         }
    }
    console.log(type);
    console.log(data);
    whencl.style.position="fixed";
    whencl.style.zIndex='2';
    whencl.style.width="100%";
    whencl.style.height="100%";
    whencl.style.top="0";
    whencl.style.bottom="0";
    whencl.style.left="0";
    whencl.style.right="0";
    whencl.style.backgroundColor="white";
    whencl.style.opacity=".9";
    whencl.style.textAlign='center';
    whencl.innerHTML+=`<button onclick="closeOverlay()"style="background-color:red;color:white;border-style:none;padding:10px 20px;border-radius:2px;position:absolute;right:10px;top:10px">Close</button>
    <div style="position:relative;top:30%;">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgn}.png"/>
    <h2>${data.name}</h2>
    <p style="padding-top:10px">Type: ${type}| Height: ${data.height}| Weight: ${data.weight}</p>
    </div>`


}
async function get(){
    let response= await fetch("https://pokeapi.co/api/v2/pokemon/?offset=150&limit=150");
    let data= await response.json();
    let arr=data.results;
    for(let i=0;i<arr.length;i++){
        let a=arr[i].url;
        section.innerHTML+=`<div class="pokemon-sec" onclick="clickfun('${a}',${i+1})" onmouseover="hoverfun(this)"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png"/><h3>${i+1}-${arr[i].name}</h3></div>`;
    }
}
get();

