//document.getElementById("count-el").innerText = 5 //speaking directly to the document this script is attached too, to get an element by its ID and set the value to 5
//let firstBatch = 5
//let secondBatch = 7
//let count = firstBatch + secondBatch //let count be 0
//console.log(count)

let count = 0

// console.log(count)

function increment(){
    count += 1;
    document.getElementById("count").innerText = count;
    console.log("button was clicked")
}

function decrement(){
    count -= 1;
    document.getElementById("count").innerText = count;
    console.log("one person subtracted")
}
