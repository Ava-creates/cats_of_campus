window.addEventListener('scroll', function(e){
    
    let percent = getScrollPercent();
    document.body.style.backgroundColor = 'rgb(0, 0,' + percent* 255+')';
  });
