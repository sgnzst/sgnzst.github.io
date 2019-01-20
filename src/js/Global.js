function documentLoad(e, that){
  e.preventDefault()
  let link = $(this).attr('href') ? $(this).attr('href') : $(that).attr('href')
  swal({
    icon: '/assets/img/tools/loading.gif',
    text: "Sedang Proses...",
    buttons: false,
    closeOnEsc: false,
    closeOnClickOutside: false
  })
  setTimeout(function(){
    window.location.href = link
  }, 750)
}

window.onhashchange = function() {
  location.reload(true)
}
