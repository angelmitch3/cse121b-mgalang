/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Michael Galang'
let currentYear = new Date().getFullYear();
let profilePicture = './images/placeholder.png';

/* Step 3 - Element Variables */

let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('#profileImage');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture); 
imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

let favoriteFoods = ['Rice', 'Pizza', 'Fried Chicken'];
foodElement.textContent = favoriteFoods.join(', ');
let newFavoriteFood = 'Shawarma';
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `{favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML +='<br>' + favoriteFoods.join(', ');






