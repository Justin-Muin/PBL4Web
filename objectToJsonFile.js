let person = {
    name: "John",
    gender: "male"
};
  
person.age = 25;  
  
console.log(person);


//this only runs on browser console if you dont have NodeJS

fetch('./data.json')
.then((response) => response.json())
.then((json) => console.log(json));