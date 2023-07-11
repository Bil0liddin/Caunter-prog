let sanash = 0;
let resetbtn = 0;
const countElement = document.getElementById("sanash");
const resetElement = document.getElementById("resetbtn")

function qoshish() {
  sanash++;
  countElement.textContent = sanash;
}

function ayirish() {
  if (sanash > 0) {
    sanash--;
    countElement.textContent = sanash;
    }
    function resetbtn(){
        if (sanash < 0){
        sanash--;
        resetElement.textContent = sanash;
        }
    }
   }