function paginateBlog(that, event) {
  event.preventDefault();
  var pageUrl = $(that).attr('href');
  $.ajax({
    method: 'GET',
    url: pageUrl,
    dataType: 'HTML',
    beforeSend: function() {
      swal({
        icon: '/assets/img/tools/loading.gif',
        text: "Sedang Proses...",
        buttons: false,
        closeOnEsc: false,
        closeOnClickOutside: false
      });
    }
  }).done(function(response) {
    var
      htmlData = $(response).find('#content').html(),
      title = $(response).filter('title').text();
    swal.close();
    $('#content').html(htmlData);
    document.title = title;
    window.history.pushState({html: htmlData, title: title}, title, pageUrl);
    window.onpopstate = function(event){
      if(event.state){
        $('#content').html(event.state.html);
        document.title = event.state.title;
      }
    };
  }).fail(function(response, stats, xhr) {
    swal.close();
    swal({
      icon: "error",
      title: "Error",
      text: response.status+" "+xhr
    });
  });
}
