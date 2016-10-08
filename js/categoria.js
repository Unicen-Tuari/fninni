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
        $("#categoria").val('');
        cargarCategoria('categoria');
        cargarDropdown('dropcat');
      },
      error: function() {
        alert('Nofunca. Capo.');
      }

    });
  });

  function cargarCategoria(id){

  };
  function cargarDropdown(id){

  };
});
