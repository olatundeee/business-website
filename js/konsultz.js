$(document).ready(function(){
  $('.slider').slider();
});


function changeBorderIn(x) {
  x.style.borderColor = "#ff1744";
  x.style.borderRadius = "25px";
  x.style.borderWidth = "2px";
  x.style.borderStyle = "solid"
}

function changeBorderOut(x) {
  x.style.borderColor = "#000";
  x.style.borderRadius = "25px";
  x.style.borderWidth = "2px";
  x.style.borderStyle = "solid"
}

var slider = document.getElementById('test-slider');
  noUiSlider.create(slider, {
   start: [20, 80],
   connect: true,
   step: 1,
   orientation: 'horizontal', // 'horizontal' or 'vertical'
   range: {
     'min': 0,
     'max': 100
   },
   format: wNumb({
     decimals: 0
   })
  });