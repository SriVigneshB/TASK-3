let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space tether';

cargoHold.pop();
cargoHold.shift();
cargoHold.unshift(1138);
cargoHold.push("20 meters");

cargoHold.splice(3,0,'keys');
console.log(cargoHold);
let res=cargoHold.indexOf('instruction manual');
console.log(cargoHold.splice(res,res));
cargoHold.splice(2,3,'cat','fob','string cheese');
console.log(cargoHold);