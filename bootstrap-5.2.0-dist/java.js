var btn = document.getElementById('active');
var bg = document.getElementById('background');
var main =document.getElementById('main');
var text = document.getElementById('text');
var bt = document.getElementById('act');
var rec = document.getElementById('rec');

    


btn.onclick = function(){
    bg.classList.toggle('op0');  
    main.classList.toggle('lowmain');  
    text.classList.toggle('recmenu');  
    
}
