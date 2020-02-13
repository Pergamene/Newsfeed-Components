/* This is the data we will be using, study it but don't change anything, yet. */

const menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function createMenu(data) {
  // create menu
  const menu = document.createElement('div');
  menu.classList.add('menu');
  menu.addEventListener('click', event => {
    event.stopPropagation();
  });
  // create list
  const list = document.createElement('ul');
  // add list items
  let li;
  for (element of data) {
    li = document.createElement('li');
    li.textContent = element;
    list.appendChild(li);
  }
  // toggle menu
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', event => {
    menu.classList.toggle('menu--open');
    event.stopPropagation();
    
    document.addEventListener('click', () => {
      if (menu.classList.contains('menu--open')) {
        menu.classList.remove('menu--open');
      }
    });
  });
  

  menu.appendChild(list);
  return menu;
}

document.body.appendChild(createMenu(menuItems));
