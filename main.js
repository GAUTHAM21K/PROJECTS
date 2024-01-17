const but1 = document.querySelector('.box1');
const but2 = document.querySelector('.box2');
const but = document.querySelector('.box');
const head = document.querySelector('.heading');
var flag = true;

but1.addEventListener("click" , () =>{
    head.innerHTML="I LOVE YOU TOO";  

});



but2.addEventListener("mouseover", () =>{
    var maxx = but2.parentElement.clientWidth - but2.offsetWidth;
    var maxy = but2.parentElement.clientHeight - but2.offsetHeight
    
        var newx = Math.floor(Math.random()*maxx);
        var newy = Math.floor(Math.random()*maxy);
    
        console.log(newx);
        console.log(newy);

        but2.style.transform='translate('+newx+'px,'+newy+'px)';
});

