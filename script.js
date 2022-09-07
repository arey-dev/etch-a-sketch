const button = document.querySelector('.button');

const container = document.querySelector('.container.grid');

container.append(...createGrid());

container.addEventListener('mouseover', (event) => {
  // change background color of grid
  // squares when curose moves onto it
  event.target.style.backgroundColor = '#00203FFF';
});

// generate grid when button is clicked
button.onclick = createNewGrid;

// handler for button's click event that
// generates a new grid based on user input
function createNewGrid () {
  // ask for size of the grid
  let size = +prompt('Enter grid size', 16);

  // exit if user cancels prompt
  if(!size) return;

  // set limit for size
  if(size > 100) size = 100;

  // remove existing grid
  // and change grid layout
  if(container.innerHTML != '') {
    container.innerHTML = '';
    container.style.gridTemplate = `repeat(${size}, 1fr) / repeat(${size}, 1fr)`;
  } 
  
  // create grid squares
  container.append(...createGrid(size));
}

// create grid items
// for grid container
function createGrid(size = 16) {
  // create array of divs
  const divs = [];
  
  let numOfDiv = size * size;
  for(let i = 0; i < numOfDiv; i++) {
    // create div element
    const div = document.createElement('div');
    
    // add class .squares
    div.className = 'squares';

    // add div to array
    divs.push(div);
  }

  return divs;
}