// console.log("Hello"); // you'll want to remove these in production
// // probably shouldn't be pushed to master on github
// let demo = "here";
// console.log(demo);
// let myHeader = document.getElementById("header-1");

// function handleChange() {
//   console.log("clicked");
//   myHeader.style.color = "Black";
//   myHeader.innerHTML = "Header Changed";
// }

let person = { name: "Jonny", age: "33" };
let person1 = { name: "Jimmy", age: "23" };
let person2 = { name: "Jimmyx", age: "16" };

// state - this responsible for keeping track of the data and current of app
let state = {
  pageHeader: "Contacts Page",
  people: [person, person1, person2],
};

// render method - takes state and renders it to html
// note: so when ever state change we need to call render

function renderPeople() {
  peopleStr = "";
  state.people.forEach(function (person, index) {
    peopleStr += `
    <div>
     ${person.name} is ${person.age} 
     <span data-index='${index}' onclick='updateUser(this)' >update</span> 
     <span onclick='deleteUser(${index})'>delete</span> 
    </div>`;
  });
  return peopleStr;
}

function deleteUser(clickedIndex) {
  console.log(clickedIndex);
  let newPeople = state.people.filter(function (person, index) {
    console.log("index: ", index);
    console.log("clickedIndex: ", clickedIndex);
    console.log(clickedIndex != index);
    return clickedIndex != index;
  });

  state.people = newPeople;
  render();
}
function updateUser(personDiv) {
  let index = personDiv.dataset.index;
  let person = state.people[index]; //this is the person at the right index
  console.log(person);
  // update name and age
  let name = prompt("Enter name");
  person.name = name;

  let age = prompt("Enter age");
  person.age = age;

  render();
}

function addPerson() {
  debugger;
  let person = {};

  let name = prompt("Enter name");
  person.name = name;

  let age = prompt("Enter age");
  person.age = age;

  state.people.push(person);

  render();
}

function render() {
  htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  <div onclick='addPerson()'>add person</div>
                  ${renderPeople()}
                </div>`;

  renderPeople();

  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
}

render();
