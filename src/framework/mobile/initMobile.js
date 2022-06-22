(function(draftWidth, n) {
  function getRem() {
    var html = document.querySelector("html");
    var w = document.body.clientWidth || document.documentElement.clientWidth;
    console.info(w, "wwwwwwww");
    var rem = (w / draftWidth) * n;
    html.style.fontSize = rem + "px";
  }
  getRem();
  window.addEventListener("resize", function() {
    getRem();
  });
})(750, 100);
