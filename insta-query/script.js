/* <script
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"></script> */

var dogBreed = $('#dogBreed');
var horizontal = $('#width');
var vertical= $('#height');
var image = $('#dogImage');

// I don't understand how I would get the entered values into the function
// in order to have the code act upon what was entered.

$(document).ready(function(){
  $("button").click(function(){
    alert("updatePicture");
    image.attr('src', dogBreed.val());
    image.css ('width', `${width.val()}px`);
    image.css ('height', `${height.val()}px`);
  });
});
