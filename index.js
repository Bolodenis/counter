const counterEl = document.getElementById("counter");
const incrementButton = document.getElementById("incrementButton");
const dicrementButton = document.getElementById("decrementButton")

let numb = 0; 
incrementButton.addEventListener("click", function(){
        numb++; 
        counterEl.innerHTML = numb; 
});
resetButton.addEventListener("click", function(){
        numb = 0; 
        counterEl.innerHTML = numb; 
});
dicrementButton.addEventListener("click", ()=>{
    numb--;
    counterEl.innerHTML = numb;
})
