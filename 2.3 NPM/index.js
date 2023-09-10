// var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();

console.log(` My name : ${sillyName}`);

let superHeroName = superheroes.random();

console.log(`I am a ${superHeroName}`);