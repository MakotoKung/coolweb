var btn = document.getElementById('active');
var bg = document.getElementById('background');
var main =document.getElementById('main');
var text = document.getElementById('text');
var bt = document.getElementById('act');
var rec = document.getElementById('rec');
var bt = document.getElementById('bt');
var first = document.getElementById('open');
var load = document.getElementById('loading');

window.onload = function(){
    setTimeout(function(){
        first.classList.remove('main');
        load.classList.add('op0');
    },3000);
}


btn.onclick = function(){
    bg.classList.toggle('op0');  
    main.classList.toggle('lowmain');  
    text.classList.toggle('recmenu');  
    bt.classList.toggle('opacity');
    
}
