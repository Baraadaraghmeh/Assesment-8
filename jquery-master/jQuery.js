/*
Q1:
Check if jQuery is loaded
*/


/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

$('#myBtn').click(function () {
$('html, body').animate({scrollTop:0},0
)});

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
*/

$("#btn1").click(function() {

$("#box").css({height:'300px', width:'250px'})


});

$("#btn2").click(function() {

$("#box").css({height:'150px', width:'150px'})


});



/*
Q4:
Learn how to fadein your boxes
*/
$("#btdiv").click(function() {

$('#div1').fadeIn(1000); 
$('#div2').fadeIn(3000); 
$('#div3').fadeIn(5000); 

});

/*
Q5:
User must first accept then he or she can signup
*/
$('#accept').click( function(){
	

$('#submitbtn').attr("disabled", !this.checked);
});
/*
Q6:
Let them print
*/
$(".printPage").click(function () {
    $ (window.print());
});

/*
Q7:
// Why this code dosent woooooooooooooooooork (in comment) ?????
Can username be too long? Yest it can - lets limit that
*/
 //$(document).ready(function(){

//$('#textarea').attr('maxLenght',(20));
 //});


 $(document).ready(function() {
 	$('#rchars').text(20);      
 	$('#textarea').on('keyup', function(){         
 		$('#textarea').attr('maxLength', 20);          
 		textLength =  $('#textarea').attr('maxLength') - $('#textarea').val().length;         
 		$('#rchars').text(textLength);    
 	}); 
 });
 
    

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/


/*
Q9:
Add new div to your website
*/


/*
Q10:
Select values from a JSON object using jQuery
*/


/*
Q11:
Add element within ul list
*/


/*
Q12:
Know what user puts into textbox
*/


/*
Q13:
Change input value
*/



// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
