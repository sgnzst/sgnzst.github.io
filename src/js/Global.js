function documentLoad(e, that){
  e.preventDefault()
  let link = $(this).attr('href') ? $(this).attr('href') : $(that).attr('href')
  $("#sidebar,a#slide,#fade").removeClass("slide")
  $("#open").show()
  $("#search").show()
  $("#close").hide()
  $('.preloader-container').fadeIn('fast')
  setTimeout(() => { window.location.href = link }, 750)
}

window.onpageshow = event => {
  if (event.persisted && $('.preloader-container').css('display') !== 'none') {
    $('.preloader-container').fadeOut('slow')
  }
}
