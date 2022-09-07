const container = document.querySelector('.container.grid');

container.append(...createGrid());

container.addEventListener('mouseover', (event) => {
  // change background color of grid
  // squares when curose moves onto it
  event.target.style.backgroundColor = '#00203FFF';
});




// create grid items
// for grid container
function createGrid() {
  // create array of divs
  const divs = [];
  
  let numOfDiv = 16 * 16;
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