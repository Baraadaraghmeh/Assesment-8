function tellFortune(){
var num =2; 

var name="Sara "; 
var loc= " USA";
var job= " programmer "	;
var answer = "tellFortune i will have "+ num + "  children , i will marriy " + name  + " i will travel to   " +loc +" , and i will work "+job  ;  
return   answer ; 
}
document.write(tellFortune());



document.write("<br><br><br><br>");

function calculatesupply(myAge , amount_ber_day){
var myAge;
var age=100-myAge ; 
var amount_ber_day ; 
 var result=( amount_ber_day * age * 365); 

return ("you will need   "+result+ " cups to last you until the ripe old age of 100 "); 





}
document.write(calculatesupply(40 ,4));
  










  


document.write("<br> <br> <br> <br> ") ; 




function doublecat(agecat){
var agecat ;
return ( agecat*2) ; 




}
document.write(doublecat(55));

document.write("<br> <br> <br> <br> ") ; 



function cube (cube_num){

var cube_num;  


return (cube_num**3);


}
document.write(cube(4)); 



document.write("<br> <br> <br> <br>"); 








function largnumber ( q , w ){
var q ; 
var w ; 
if (q>=w){

return q ; 

}

else {
	return w ; 
}
}
document.write(largnumber(20,22));    

document.write("<br> <br> <br> <br>"); 



function smallernumber ( a , b , c){
var a ; 
var b ; 
var c ;
var small=a ;  
if (small>b ){

small=b ;  

}

if(small > c) {
	 
	small=c ;  
}
return small ;  
}
document.write(smallernumber(20, -4 , 5));    


document.write("<br> <br> <br> <br>"); 




function isEven (o){
var o ; 
if (o%2==0) {


	return "true" ;
}
	else{ 
		return "false"; 

}



}
document.write(isEven(10));


document.write("<br> <br> <br> <br>");


function isodd (o){
var o ; 
if (o%2==1) {


	return "true" ;
}
	else{ 
		return "false"; 

}

}
document.write(isodd(10));



document.write("<br> <br> <br> <br>");

function average (nn1,nn2,nn3,nn4,nn5){
var nn1 ; 
var nn2 ; 
var nn3 ; 
var nn4 ; 
var nn5 ;
var ave=(nn1+nn2+nn3+nn4+nn5)/5 ;
return ave ; 

}
document.write(average(10,20,40,100,210));



document.write("<br> <br> <br> <br>");


function randomNumber(){
return Math.random();
}
document.write(randomNumber()); 



document.write("<br> <br> <br> <br>");



function randomBetweenNumber(v1 , v2 ){
var v1 ;
var v2 ; 
 
  return Math.random() * (v2 - v1) + v1;
}
document.write(randomBetweenNumber(20 , 30)) ;


document.write("<br> <br> <br> <br>");


 


