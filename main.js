const containerSlot = document.querySelector('.slot')
const btnConfettis = document.querySelector('.btn-confettis')
const emojis = ["🍾", "🍻", "🎊", "🏄🏻‍♂️"];

btnConfettis.addEventListener('click', fiesta)

function fiesta(){
  for(let i = 0;i < 50; i++){
    const confetti = document.createElement('div');
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    containerSlot.appendChild(confetti);
  }
}