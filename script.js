function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
    console.log(window.scrollY, getScrollPercent());
    let percent = getScrollPercent();
    document.body.style.backgroundColor = 'rgb(150, 50,' + (percent)* 200+')';
  });


  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

var i = 0;
var txt = 'prrrrrrrr prrrrrrrr prrrrrr'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("prr").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

