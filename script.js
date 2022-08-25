// document.getElementById("count-el").innerText = 5;

let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment(){
    count++;
    countEl.innerText = count;
    console.log(count)
}

function save(){
    let x = count + " - "
    saveEl.textContent += x;
    count = 0;
    countEl.textContent = 0;
}