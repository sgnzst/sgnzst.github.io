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
    swal.close()
    window.location.href = link
  }, 750)
}
