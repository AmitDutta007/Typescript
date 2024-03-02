
// without generic
type NumberorString = String | Number

const firstEl = (arr: NumberorString[]) => {
    return arr[0]
}

console.log(firstEl(["Amit", "Dutta"]))

// with generic
const firstEl2 = <T>(arr: T[]): T => {
    return arr[0]
}

console.log(firstEl2<string>(["Amit", "Dutta"]))
console.log(firstEl2<number>([1, 2]))

