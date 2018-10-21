function share(event) {
  event.preventDefault();
  var shareWhatsApp = document.getElementById('share-whatsapp');
  var text = document.getElementById('text').value.split('\n');
  text = text.join('%0A');
  window.location.href = 'whatsapp://send?text='+text;
}
