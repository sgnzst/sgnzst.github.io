function paginateBlog(that, event) {
  event.preventDefault();
  var pageUrl = $(that).attr('href');
  $.ajax({
    method: 'GET',
    url: pageUrl,
    dataType: 'HTML'
  }).done(function(response) {
    var
      htmlData = $(response).find('#content').html(),
      title = $(response).filter('title').text();
    $('#content').html(htmlData);
    document.title = title;
    window.history.pushState({html: htmlData, title: title}, title, pageUrl);
    window.onpopstate = function(event){
      if(event.state){
        $('#scroll').html(event.state.html);
        document.title = event.state.title;
      }
    };
  }).fail(function(response, stats, xhr) {
    swal({icon: "error", title: "Error", text: response.status+" "+xhr});
  });
}
