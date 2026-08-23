(function(){
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var langBtn = document.getElementById('lang-toggle');

  function getStored(key){
    try { return localStorage.getItem(key); } catch(e){ return null; }
  }
  function setStored(key, val){
    try { localStorage.setItem(key, val); } catch(e){}
  }

  // THEME
  var storedTheme = getStored('badr-portfolio-theme');
  if(storedTheme === 'light' || storedTheme === 'dark'){
    root.setAttribute('data-theme', storedTheme);
  }
  themeBtn.addEventListener('click', function(){
    var current = root.getAttribute('data-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var effectiveDark = current ? current === 'dark' : prefersDark;
    var next = effectiveDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    setStored('badr-portfolio-theme', next);
  });

  // LANGUAGE
  var storedLang = getStored('badr-portfolio-lang');
  function applyLang(lang){
    if(lang === 'en'){
      root.setAttribute('data-lang', 'en');
      langBtn.textContent = 'FR';
    } else {
      root.removeAttribute('data-lang');
      langBtn.textContent = 'EN';
    }
  }
  applyLang(storedLang === 'en' ? 'en' : 'fr');
  langBtn.addEventListener('click', function(){
    var isEn = root.getAttribute('data-lang') === 'en';
    var next = isEn ? 'fr' : 'en';
    applyLang(next);
    setStored('badr-portfolio-lang', next);
  });
})();
