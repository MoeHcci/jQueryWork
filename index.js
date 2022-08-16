// The jQuery code inside the ready keyword. this is helpful, because it will
// execute the code once jQuery has been loaded properly The .ready() method offers a way to run
// JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate.

$(document).ready(function() {

  // Change the style of a an element
  // $("h1") is the same as document.querySelector("h1") or document.querySelectorAll("h1")
  // jQuery does not care if it selects on elelemnt or many. It service the purpose
  // This will produce an array aka object
  $("h1").css("color", "Blue");

  // Change the style of a class
  // $(".myClass") is the same as document.getElementsByClassName("myClass")
  // This will produce an array aka object
  $(".myClass").css("border", "3px solid red");

  // Change the style of an id & multiple CSS properties
  // $("#praragraph2") is the same as document.getElementsByIdName("praragraph2")
  // This will produce an array aka object
  $("#praragraph1").css({"color": "red", "background-color": "blue"});


// adding a class to all the P elements
// https://api.jquery.com/addclass/
// It's important to note that this method does not replace a class.
// It simply adds the class, appending it to any which may already be assigned to the elements.
$("p").addClass("praragraph2");

  // These brackets are for the .ready() method
});
