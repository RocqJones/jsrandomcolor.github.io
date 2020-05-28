const colorBtn = document.querySelector('.colorBtn'); /*first I'll create a varible to select the button*/
const bodyBcg = document.querySelector('body');
/*I'll create an array that will hold all the background colors*/
const colors = ['green','skyblue','#3b5998','yellow','pink','purple'];

/*now I'll add event listener =  click*/
colorBtn.addEventListener('click',changeColor);/*then create function 'changeColor' called*/
function changeColor(){
  //bodyBcg.style.backgroundColor = colors[1]; /*this is cool but we want a random color everytime we click*/
  let random = Math.floor(Math.random()*colors.length)
  bodyBcg.style.backgroundColor = colors[random];
}
