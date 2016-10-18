$(document).ready(function(){
  var id_char = '';
  function AjaxImagenes(formData){
  };

  $(".botonAgregarImagenes").on("click", function(event){
    event.preventDefault();
    id_char=event.target.href;
    var posbarra=id_char.lastIndexOf("/");
    id_char = id_char.substr(posbarra+1);
    $('#imagesToUpload2').click();
  });


  $("#imagesToUpload2").on("change", function(event){
    event.preventDefault();
    $('#imgAjax').submit();
  });

  $("#imgAjax").on("submit", function(event){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url:"index.php?admin=agregar_imagenes&id_char=" + id_char,
      data: new FormData(this),
      contentType : false,
      processData : false,
      error: function(){
        alert("No anduvo la llamada AJAX");
      },
    });
  });

  });
