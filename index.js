 /* ---- manipulating css------
 
 
 $("h1").css("color","red");
//document.querySelector("h1").css("color","red"); c la meme chose
$("h1").css("font-size");// retourne la valeur 
$("h1").css("font-size","5rem"); // change la taille
 

il vaut mieux ne pas changer css avec java script donc on manipule les classes

$("h1").addClass("big-title"); 
*/



// --- manipulating text---
/*
$("h1").text ( "hi");
$("button").text ( " dont click");
$("button").html( " <em> hey</em>");*/
// --- manipulating  attributes ---
 /*
$("a").attr("href", "https://www.yahoo.com/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAADH3QdGaRRD1vVb1MFdcoGamef5zp9W_7CkoGkMZqQyfA7ON6GfKRztVnGJv53pWbbocbSBuuo0YJOolCI669wWQbxLutkwZJepafCSoC2nToVUPUTliD72yBf5-4z9jxRCZODdyqsg6fyy0JD6m4FMn3HT4B37itwRjjETLYNPz")
*/
// --- add event listner ----
/*
$("h1"). click(function(){
    $("h1").css("color","red");  
}) */
// this is the code without using jquery to change all the buttons to purpule when we click on it 
 /*for ( var i=0; i<4;i++)
 {
    document.querySelectorAll("button"[i].addEventListener("click", function(){
        document.querySelector("h1").style.color="purple";
    }))
 }//  
 // with jquey
 $("button").click(function(){
    $("h1").css("color","purple");
 })
*/
/*
// -- adding and removing elements ---
$("h1").before ("<button> new</button>");
$("h1").after ("<button> new</button>");
$("h1").append ("<button> new</button>");
$("h1").prepend ("<button> new</button>");
$("button").remove();*/

 //--- adding  animation --
 /*
 $("button").click(function(){
    $("h1").hide();
 })
  
 $("button").click(function(){
    $("h1").show();
 })*/
  /*
 $("button").click(function(){
    $("h1").toggle();
 })

 $("button").click(function(){
    $("h1").fadeOut();
 })// progressivement 
 $("button").click(function(){
    $("h1").fadeIn();
 })// progressivement 
 
 $("button").click(function(){
    $("h1").slideToggle();
 })  
 $("button").click(function(){
    $("h1").animate({opacity:0.5});
 })// anmate is only for css methods that have numeric vlues like margin opacity ...
*/
 $("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
 }) 