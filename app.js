var div = document.querySelector(".fade");
var btn = document.querySelector(".fadeButton");
btn.addEventListener("click", function(){
    div.classList.toggle('fadeInOut');
  div.classList.add("elementToFadeIn");
  // Wait until the animation is over and then remove the class, so that
  // the next click can re-add it.
  setTimeout(function(){div.classList.remove("elementToFadeIn");}, 4000);
});