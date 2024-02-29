"use strict";
function greet(person) {
    return `Hello, ${person.name}!`;
}
const users = { name: 'John', age: 25 };
console.log(greet(users));
