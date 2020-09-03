let person = { name: "Jonny", age: "33" };
let person1 = { name: "Jimmy", age: "23" };
let person2 = { name: "Jimmyx", age: "16" };

// this would like something you get back from you model
// Person.all
let people = [person, person1, person2];

people.forEach(function (person) {
  console.log(`${person.name} is ${person.age}`);
});

over21People = people.filter(function (person) {
  //do stuff
  return person.age >= 21;
});
console.log(over21People);

aboutPeople = over21People.map(function (person) {
  return `<h1>${person.name} is ${person.age}</h1>`;
});

console.log(aboutPeople);
