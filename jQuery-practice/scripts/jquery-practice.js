console.log('Welcome to jQuery');

//!<-------------- JS vs jQuery (Getting Elements) -------------->

//? byId (1: js, 2: jQuery)
let htmlElement = document.getElementById(results);
htmlElement = $("#results");
console.log(htmlElement);

//? byClass (1: js, 2: jQuery)
let htmlElement2 = document.getElementsByClassName("tomato-bg");
htmlElement2 = $(".tomato-bg");
console.log(htmlElement2);

//? byTag (1: js, 2: jQuery)
let htmlElement3 = document.getElementsByTagName("p");
htmlElement3 = $("p");
console.log(htmlElement3);

//? ID selector 
$("#red").css("background-color", "red").css("color", "white");

$("#blue").css("background-color", "blue").css("color", "white");

//? Class selector 
$(".tomato-bg").css("background-color", "tomato").css("color", "white");

let paragraphWithBorder = $(".with-border").css("border", "3px solid black");
paragraphWithBorder.on("click", function () {
    $(this).addClass("bg-grey");
});

//? Tag selector
$("p").css("cursor", "pointer");

//? simple and common functions
function register(){
    let testEntry = $("#testInput").val(); //? get value of input

    $("#results").append(`<li>${testEntry}</li>`); //? append to the list
}

//? hooking events
$("#btnRegister").on("click", register); //? activate the function register when the button is clicked

function clickMe(){
    console.log("clicked"); //? display clicked in the console
    $("p:first").hide(); //? hide the paragraph
    $("p:last").css("border", "1px solid black"); //? add border to the paragraph
}

$("#clickMe").on("click", clickMe); //? activate the function clickMe when the button is clicked