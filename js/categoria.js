$(document).ready(function () {
  $("#formcat").submit(function(event){
    event.preventDefault();
    $.ajax({
      url:"index.php?admin=agregar_categoria",
      type: "post",
      data: new FormData(this),
      contentType: false,
      processData: false,
      success: function() {
        $("#categoriai").val('');
        cargarCategoria('categorias');
        dropdownCategoria('dropdowncat');
      },
      error: function() {
        alert('Nofunca. Capo.');
      }

    });
  });

  function cargarCategoria(seccion){
    $.ajax({
      url:"index.php?admin="+seccion,
      type: "get",
      dataType: "HTML",
      success: function(data){
          $("#categoria").html(data);
      },
    });
  };
  function dropdownCategoria(seccion){
    $.ajax({
      url:"index.php?admin="+seccion,
      type: "get",
      dataType: "HTML",
      success: function(data){
          $("#dropcat").html(data);
      },
    });
  };

  cargarCategoria('categorias');
  dropdownCategoria('dropdowncat');
});
