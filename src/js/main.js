var isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
  },
  anyMobile: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

function share() {
  var shareWhatsApp = document.getElementById('share-whatsapp');
  var text = document.getElementById('text').value.split('\n').join('%0A');
  var link = 'whatsapp://send?text='+text;
  if (isMobile.anyMobile()) {
    window.location = link;
  }else {
    alert('You should share this link in mobile app');
  }
}
