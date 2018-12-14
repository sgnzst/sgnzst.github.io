(function($) {
  $.fn.searchPosts = function(options, data) {
    var settings = $.extend({
      jsonFile        : '/api/posts.json',
      jsonFormat      : 'title,category,desc,url,date,shortdate',
      template        : '<li><article><a class="document-load" href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',
      searchResults   : '.search-results',
      searchResultsTitle   : '<h4>Hasil Pencarian:</h4>',
      limit           : '7',
      noResults       : '<p>Oops!<br/><small>Tidak ada hasil ! <i class="em em-frowning"></i></small></p>'
    }, options);

    var properties = settings.jsonFormat.split(',');
    var jsonData = [], origThis = this, searchResults = $(settings.searchResults);
    if(settings.jsonFile.length && searchResults.length){
      $.ajax({
        type: "GET",
        url: settings.jsonFile,
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          jsonData = data;
          registerEvent();
        },
        error: function(x,y,z) {
          console.log("***ERROR in search***");
          console.log(x);
          console.log(y);
          console.log(z);
          // x.responseText should have what's wrong
        }
      });
    }

    function registerEvent(){
      origThis.keyup(function(e){
        if($(this).val().length){
          writeMatches( performSearch($(this).val()) );
        }else{
          clearSearchResults();
        }
      });
    }

    function performSearch(str){
      var matches = [];
      $.each(jsonData,function(i,entry){
        for(var i=0;i<properties.length;i++) {
          if(entry[properties[i]] !== undefined && entry[properties[i]].toLowerCase().indexOf(str.toLowerCase()) !== -1){
            matches.push(entry);
            i=properties.length;
          }
        }
      });
      return matches;
    }

    function writeMatches(m){
      clearSearchResults();
      searchResults.append( $(settings.searchResultsTitle) );

      if(m.length){
        $.each(m,function(i,entry){
          if(i<settings.limit){
            var output=settings.template;
            for(var i=0;i<properties.length;i++){
              var regex = new RegExp("\{" + properties[i] + "\}", 'g');
              output = output.replace(regex, entry[properties[i]]);
            }
            searchResults.append($(output));
          }
        });
      }else{
        searchResults.append( settings.noResults );
      }
    }

    function clearSearchResults(){
      searchResults.children().remove();
    }
  }
}($));
