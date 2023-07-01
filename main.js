// Getting data object from the json file
import data from './data.json' assert {type: 'json'}
let heights = heightsArr(data);
// Getting the Columns
let columns = document.querySelectorAll("span.graph-col");
// Find the highest to change its color by adding a class
let highestNum = Math.max(...heights);
let highestIndex = heights.indexOf(highestNum);
columns[highestIndex].classList.add("highest");
// Giving each column the right height
let cssHeights = [];
for(let obj of data) {
    cssHeights.push(Math.floor(obj.amount * 100 / highestNum));
}
for(let i = 0; i < 7; i++) {
    columns[i].setAttribute("number", `$${heights[i]}`); // Changing the attribute because i set the ::before content property to equal the value of this attribute (the number the number that appears on click)
    columns[i].style.height = `${cssHeights[i]}%`
    // Adding class that show the amount in a pesudo element(after) on click
    columns[i].addEventListener("click", () => {
        for(let col of columns) {
            if(col != columns[i]) {
                col.classList.remove("clicked");
            }
        }
        columns[i].classList.toggle("clicked");
    })
}
// Used Fuctions:
function heightsArr(data) {
    let array = [];
    for(let obj of data) {
        array.push(obj.amount);
    }
    return array;
}