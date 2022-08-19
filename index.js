// The jQuery code inside the ready keyword. this is helpful, because it will
// execute the code once jQuery has been loaded properly The .ready() method offers a way to run
// JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.
// This is just a paractice sheet. But we need to keep in mind .js is not for styles
// We can use $ or jQuery to call out jQuery instead of the lengthy Villa JS

$(document).ready(function() {

  // Change the style of a an element
  // $("h1") is the same as document.querySelector("h1") or document.querySelectorAll("h1")
  // jQuery does not care if it selects on elelemnt or many. It service the purpose
  // This will produce an array aka object
  $("h1").css("color", "Blue");

  // Change the style of a class
  // $(".myClass") is the same as document.getElementsByClassName("myClass")
  // This will produce an array aka object
  jQuery(".myClass").css("border", "3px solid red");

  // Change the style of an id & multiple CSS properties
  // $("#praragraph2") is the same as document.getElementsByIdName("praragraph2")
  // This will produce an array aka object
  $("#praragraph1").css({"color": "red", "background-color": "blue"});


// adding a class to all the P elements
// https://api.jquery.com/addclass/
// It's important to note that this method does not replace a class.
// It simply adds the class, appending it to any which may already be assigned to the elements.
$("p").addClass("praragraph2");



// To edit the an attribute using jQuery, you need a two inputs while using the .attr() function.
// The example below edits all the images in the html pagefirst image
// $("img").attr("src", "violin.jpg");


// To edit the an attribute using jQuery, you need a two inputs while using the .attr() function.
// The example below edits specific images in the html pagefirst image
$("#musicalInstrument").attr("src", "violin.jpg");


// Editing an element's text
$("#praragraph1").text("hi");


// Editing an element's text + html of its content
$(".myClass").html("<em>hello click me</em>")




  // These brackets are for the .ready() method
});
