const counterEL = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

let count = 0;

incrementEl.addEventListener( "click", () => {
      count++;
      counterEL.innerText = count;
})

decrementEl.addEventListener( "click", () => {
      count--;
      counterEL.innerText = count;
})