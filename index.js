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

let people = [person, person1, person2];

// state - this responsible for keeping track of the data and current of app
let state = {
  pageHeader: "Contacts Page",
  people: people,
};

// render method - takes state and renders it to html
// note: so when ever state change we need to call render

function renderPeople() {
  peopleStr = "";
  people.forEach(function (person) {
    peopleStr += `<div>${person.name} is ${person.age}</div>`;
  });
  return peopleStr;
}

function render() {
  htmlString = `<div>
                  <h1>${state.pageHeader}</h1>
                  ${renderPeople()}
                </div>`;

  renderPeople();

  appElement = document.getElementById("app");
  appElement.innerHTML = htmlString;
}

render();
