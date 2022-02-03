let count = 0 
let incrementEl = document.getElementById("increment-el")
let countingEl = document.getElementById("counting-el")
let saveEl = document.getElementById("save-el")
let enteredEl = document.getElementById("entered-el")
function increment() {
    count++
    countingEl.textContent = count
}
function save() {
    enteredEl.textContent += count + " - "
    count = 0
    countingEl.textContent = count
    
}


