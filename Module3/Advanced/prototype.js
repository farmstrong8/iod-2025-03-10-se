let animal = { eats: true, sleeps: true, legs: 4, mammal: true }; // inherits from Object prototype
let animalPrototype = Object.getPrototypeOf(animal); // recommended way to get prototype
console.log(animalPrototype); // BUT printing it via console.log is incomplete
console.log(Object.getOwnPropertyNames(animalPrototype)); // prints all prototype (Object) properties

let rabbit1 = { jumps: true };
Object.setPrototypeOf(rabbit1, animal);

console.log(rabbit1.eats); // true
console.log(rabbit1.jumps); // true
console.log(rabbit1.legs); // 4
console.log(rabbit1.mammal); // true
