'use strict';

// TODO: assign `catButton` a value by selecting the button labeled `Make Cat` from the DOM

const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){
  // TODO: assign `newCat a value by creating a new list item DOM element
  // TODO: assign the list item's text to be 'Cat' or the name of a cat you know.
    const newCat = document.createElement('img')
  newCat.src = '/imgs/Cat.jpeg'
  const cats = document.getElementById('cats');
  cats.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function (){
  const newDog = document.createElement('img')
  newDog.src = '/imgs/Dog.jpg'
  // TODO: assign `dogs` a value by selecting the second unordered list by its id
 const dogs = document.getElementById('dogs');
//  const dogs;

  // TODO: append the newly created list item to the dogs list
  dogs.appendChild(newDog);
});

const sheepButton = document.getElementById('make-sheep');
// TODO: add an event listener to the sheepButton that calls `handleMakingSheep` when clicked

sheepButton.addEventListener("click", handleMakingSheep);

function handleMakingSheep(){
  // TODO: make a new list item, assign its text content to `Sheep` or the name of a sheep you know, and append it to the third unordered list.
  const newSheep = document.createElement('img')
  newSheep.src = '/imgs/Sheep.jpg'
const sheeps = document.getElementById('sheeps');
sheeps.appendChild(newSheep)
};

// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`

const horseButton = document.getElementById('make-horse');
horseButton.addEventListener("click", handleMakinghorse);
function handleMakinghorse(){
  const newHorse = document.createElement('img')
  newHorse.src = '/imgs/Horse.jpeg'
    const horses = document.getElementById('horses');
    horses.appendChild(newHorse);
    };

    
  
   
   