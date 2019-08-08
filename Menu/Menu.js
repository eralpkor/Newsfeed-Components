/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// STRETCH GOAL solution with JQuery
$(document).ready(function () {
  function createMenu(arr) {
    // create elements
    const $menu = $('<div></div>').attr('id', 'MENU').addClass('menu').html('<ul></ul>')
    $('.header').append($menu)

    arr.forEach(function (text) {
      $('.menu ul').append('<li>' + text + '</li>');
    });

    return $menu;
  }

  // prepend data to .header class
  $('.header').prepend(createMenu(menuItems));

  // create event listener on mutton and toggle class
  $('.menu-button').click(function () {
    $('.menu').toggleClass('menu--open');
  });
});

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// PURE JavaScript solution
/*
const menuButton = document.querySelector('.menu-button');
const header = document.querySelector('.header');


function createMenu(arr) {
  // define new elements
  const menu = document.createElement('div');
  const UL = document.createElement('ul');

  header.appendChild(menu);
  

  menu.classList.add('menu');

  // arr.forEach(text => {
  //   let li = document.createElement('li');
  //   li.textContent = text;
  //   UL.appendChild(li);
  // });

  arr.forEach(function(text) {
    $(UL).append('<li>' + text + '</li>');
  });

  $(menu).append(UL)
  // menu.appendChild(UL);

  menuButton.addEventListener('click', function () {
    menu.classList.toggle('menu--open');
    
  });
  
  return menu;
}

header.prepend(createMenu(menuItems));
*/

