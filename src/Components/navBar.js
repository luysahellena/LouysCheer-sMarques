// Create the navbar elements
const navbar = document.getElementById('navbar');
const ul = document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
const a1 = document.createElement('a');
const a2 = document.createElement('a');
const a3 = document.createElement('a');

// Set the text and href attributes for each link
a1.textContent = 'Home';
a1.href = '#';
a2.textContent = 'About';
a2.href = '#';
a3.textContent = 'Contact';
a3.href = '#';

// Add the links to the list items
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);

// Add the list items to the unordered list
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

// Add the unordered list to the navbar
navbar.appendChild(ul);