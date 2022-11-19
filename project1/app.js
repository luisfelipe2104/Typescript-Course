var person = {
    // const person = { // better sintax
    name: 'Luis',
    age: 17,
    hobbies: ['Baskatball', 'Reading'],
    role: [2, 'author']
};
// person.role.push("admin")   // pushes an element to the tuple
// person.role[1] = 10  // returns an error, 'cause the second position should be a string
// person.role = [0, 'admin', 'user']  // gives an error 'cause it should only contain 2 elements
var favoriteActivities; // any[] allows an array all types, it's different from string[]
favoriteActivities = ['Sports', 1];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map())  // !!! ERROR !!!
}
console.log(person.name);
