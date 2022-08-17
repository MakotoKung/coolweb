var btn = document.getElementById('active');
var a = document.getElementById('2')
var bg = document.getElementById('background');
var main =document.getElementById('main');
var text = document.getElementById('text')
var bg2 = document.getElementById('background2');
    


btn.onclick = function(){
    bg.classList.toggle('op0');  
    main.classList.toggle('lowmain');  
    text.classList.toggle('recmenu');     
}
a.onclick = function(){
    bg2.classList.toggle('op0');        

}   
