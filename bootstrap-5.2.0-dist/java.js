var btn = document.getElementById('active');
var bg = document.getElementById('background');
var main =document.getElementById('main');

btn.onclick = function(){
    bg.classList.toggle('op0');  
    main.classList.toggle('lowmain');       
}
