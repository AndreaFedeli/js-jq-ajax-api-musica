$(document).ready(function() {
//utilizzo ajax per collegarmi all API per recuperare i dati degli album
  $.ajax(
    {
    url: 'https://flynn.boolean.careers/exercises/api/array/music',
    method: 'GET',
    success: function(data) {
      printAlbum(data.response);

    },
    'error': function() {
     alert('Errore ');
    }
  });


//funzione per l inserimento dei dati ricavati da API
  function printAlbum(album) {
    for (var i = 0; i<album.length; i++) {
      var cd = album[i];
      console.log(cd);

  // riempio il template tramite handelbars
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  var html = template(cd);
  $('.cds-container').append(html);
  }
  }
  });
