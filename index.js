document.getElementById('myIframe').onload = function() {
    var iframe = document.getElementById('myIframe');
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc + '?autoplay=1';
  };