let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
cargoHold[5] = 'space tether';
console.log(cargoHold);
console.log(cargoHold.pop());
console.log(cargoHold.shift());
console.log(cargoHold.unshift(1138));
console.log(cargoHold.push("20 meters"));
console.log(`The array ${cargoHold} has a length of ${cargoHold.length}.`);