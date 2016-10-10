$(document).ready(function () {
  $("#formcharla").submit(function(event){
    event.preventDefault();
    $.ajax({
      url:"index.php?admin=agregar_charla",
      type: "post",
      data: new FormData(this),
      contentType: false,
      processData: false,
      success: function() {
        $("#titulo").val('');
        $("#descripcion").val('');
        $("#nombre").val('');
      },
      error: function() {
        alert('Nofunca. Capo.');
      }

    });
  });

});
