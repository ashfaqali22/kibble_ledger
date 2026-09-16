(function(){
  var toggle = document.getElementById('navtoggle');
  var toc = document.getElementById('toc');
  if (toggle && toc){
    toggle.addEventListener('click', function(){
      toc.classList.toggle('open');
    });
    toc.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ toc.classList.remove('open'); });
    });
  }

  var chapters = Array.prototype.slice.call(document.querySelectorAll('.chapter, .doc-hero'));
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
  function onScroll(){
    var mid = window.scrollY + window.innerHeight * 0.3;
    var current = null;
    chapters.forEach(function(ch){
      if (ch.offsetTop <= mid) current = ch.id;
    });
    links.forEach(function(a){
      var target = a.getAttribute('href').replace('#','');
      a.classList.toggle('active', target === current);
    });
  }
  document.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  onScroll();
})();
