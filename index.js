const circle = document.getElementById("circle")
const up = document.getElementById("up")
const dn = document.getElementById("down")

var rotateValue = circle.style.transform;
var rotateSum ;

up.onclick = function(){
rotateSum = rotateValue + "rotate(-90deg)";
circle.style.transform = rotateSum;
rotateValue = rotateSum;

}


dn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    
    }