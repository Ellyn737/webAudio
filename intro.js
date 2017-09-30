//Variablen
var a = 1;
var b = 2;

console.log(a);
console.log(b);

//Operatoren
var foo = 2;
var bar = "2";

//true --> trotz unterschiedlicher Typen....oder? bei zweifachen, bei dreifachen werden typen berücksichtigt
var result = (foo == bar);

console.log(result);


var myButton = document.getElementById("Mybuttons");

//geht auch mit divs
//mouseup, touchstart
myButton.addEventListener('mousedown', function(e){
    console.log("You clicked me!! Yey!!")
});


//kann den text des divs ändern
document.getElementById("myDiv").innerHTML = "hiiii";