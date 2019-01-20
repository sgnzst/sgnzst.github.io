function documentLoad(e, that){
  e.preventDefault()
  let link = $(this).attr('href') ? $(this).attr('href') : $(that).attr('href')
  $("#sidebar,a#slide,#fade").removeClass("slide")
  $("#open").show()
  $("#search").show()
  $("#close").hide()
  swal({
    icon: '/assets/img/tools/loading.gif',
    text: "Sedang Proses...",
    buttons: false,
    closeOnEsc: false,
  })
  setTimeout(() => { window.location.href = link }, 750)
}
