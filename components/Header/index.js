// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const topHeader = document.querySelector('.header-container');
const head = Lambda()
topHeader.append(head)

function Lambda(){
    const topPart = document.createElement('div');
    const date = document.createElement('span');
    const title = document.createElement('h1');
    const temp = document.createElement('span');

    date.textContent = 'JANUARY, 17 2020';
    temp.textContent = '98°'
    title.textContent =  'Lambda Times'

    topPart.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    topPart.appendChild(date);
    topPart.appendChild(title);
    topPart.appendChild(temp);

    console.log(Lambda);

    return topPart
}
