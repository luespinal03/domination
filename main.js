// 1 - 2

function strikeThis() {
    let li = document.querySelector('#arguments li'); // only grabs one item at a time, the first one it finds. with '#arguments li' we are specifying which li we want by ID aka #arguments
    li.style.textDecoration = 'line-through'
}

strikeThis()

// 3. 

// function setImage(para1,para2)
// id: 'string'
// url: 'string'

function setImage(id, url) {
    let img = document.querySelector(`#${id}`);
    img.src = url;
    img.style.height = "200px";
}


// 4. 

setImage("image-1", "https://images4.alphacoders.com/556/556993.jpg");
setImage("image-2", "https://images5.alphacoders.com/520/520015.jpg");
setImage("image-3", "https://rare-gallery.com/thumbs/550583-atomhawk-design.jpg");

// 5 && 6removes the first two li's from the document aka
/*
<li>This is an argument</li>
<li>This is a counterpoint</li>
*/

function removesLi() {
    let li = document.querySelector('li');
    li.remove();
    
}
removesLi() // removes <li>This is an argument</li>
removesLi() // removes <li>This is a counterpoint</li>


// 7 && 8

function random(font, id){
    let ide = document.querySelector(id);
    ide.style.fontSize = font;
}

random('150px', '#heading')// calling by id must be done because of the # inside the function. Otherwise, remove # inside function to call by tag name. Replace # by . to call by class name. 

///////////////-END OF PART 1-/////////////


/////////////////-PART 2-//////////////////
// 1. && 2 

function appends(dom){
    let ul = document.querySelector('#arguments');
    ul.appendChild(dom)
}
let newElement = document.createElement('li')
let myImg = document.querySelector('#image-1')
// newElement.innerText = "yes"
appends(myImg)

///////////////////////////////////////////
// 3 && 4
function imgElement(img){
img.style.height = '30px'
}

let myImg2 = document.querySelector('#image-2')

imgElement(myImg2)

///////////////////////////////////////////
// 5 && 6

function invisible(element){
element.className = 'invisible'
}

let myInv = document.querySelector('#thing-2')
invisible(myInv)

////////////////-END OF PART 2-////////////

///////////////////-PART 3-////////////////
// 1. && 2. 
function groot(good){
    let olNewItem = document.createElement('li')
    olNewItem.innerText = good;
    return olNewItem;
}

let testItem = groot('I am Groot')
appends(testItem)
///////////////////////////////////////////
// 3. && 4
function sizing(hSize, text){
    let header = document.createElement(`h${hSize}`)
    header.innerText = text; 
    return header; 
}

let headerTest = sizing('1','some text');
appends(headerTest)