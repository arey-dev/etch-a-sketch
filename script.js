const container = document.querySelector('.container.grid');

createGrid();




// create div elements that will fit 
// a 16x16 grid container
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

  container.append(...divs);
}