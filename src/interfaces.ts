// Interface
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): string {
    return `Hello, ${person.name}!`;
}

const users = { name: 'John', age: 25 };
console.log(greet(users));