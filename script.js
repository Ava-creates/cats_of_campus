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
