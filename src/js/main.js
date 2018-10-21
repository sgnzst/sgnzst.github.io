function share(event) {
  event.preventDefault();
  var shareWhatsApp = document.getElementById('share-whatsapp');
  var text = document.getElementById('text').value.split('\n');
  text = text.join('%0A');
  // shareWhatsApp.setAttribute('href', 'whatsapp://send?text='+text);
  window.location.href = 'https://wa.me?text='+text;
  //whatsapp://send?text=
}
