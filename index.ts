// import { serve } from "./dependencies.ts";

// console.log("localhost 8000");

// serve((_req) => new Response("hola mundo"), { port: 8000 });

const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const res = await response.json();
console.log('res.name', res.name)

localStorage.setItem('name', res.name)

console.log(localStorage.getItem('name'))