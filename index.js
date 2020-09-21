document.getElementById("btn").addEventListener("click", findNumber)
const my_nmr= 10;
var my_test= 0;

function findNumber(){
    const enterd_number = document.getElementById("inp").value;
     my_test +=1;
     document.getElementById("number").innerHTML ="This is your test number: " + my_test;    

    if (isNaN(enterd_number))
        
        return document.getElementById("help_text").innerHTML = "Are you sure that this is a number?";
    
    if  (enterd_number > my_nmr)
        
        return document.getElementById("help_text").innerHTML ="I am thinking about lower number";
    if (enterd_number < my_nmr) 
        
        return document.getElementById("help_text").innerHTML ="I am thinking about higher number";
    if (enterd_number == my_nmr)
        
        return document.getElementById("help_text").innerHTML ="Congratulations! Right Guess";
        
    
    document.getElementById("number").innerHTML ="5";   


    
    

}

var a=5;

console.log(typeof my_nmr)