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
        cargarCharla('charlasAdmin');
      },
      error: function() {
        alert('Nofunca. Capo.');
      }

    });
  });
  function cargarCharla(seccion){
    $.ajax({
      url:"index.php?admin="+seccion,
      type: "get",
      dataType: "HTML",
      success: function(data){
          $("#charlas").html(data);
      },
    });
  };

  cargarCharla('charlasAdmin');
});
