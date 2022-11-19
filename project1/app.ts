const person: {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]  // tells the js that the first element should be a number and the second a string
} = {
// const person = { // better sintax
    name: 'Luis',
    age: 17,
    hobbies: ['Baskatball', 'Reading'],
    role: [2, 'author']
}

// person.role.push("admin")   // pushes an element to the tuple
// person.role[1] = 10  // returns an error, 'cause the second position should be a string
// person.role = [0, 'admin', 'user']  // gives an error 'cause it should only contain 2 elements

let favoriteActivities: any[]   // any[] allows an array all types, it's different from string[]
favoriteActivities = ['Sports', 1]

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())  // !!! ERROR !!!
}

console.log(person.name)