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
        cargarCharlas('charlasAdmin');
      },
      error: function() {
        alert('Nofunca. Capo.');
      }

    });
  });
  function cargarCharlas(seccion){
    $.ajax({
      url:"index.php?admin="+seccion,
      type: "get",
      dataType: "HTML",
      success: function(data){
          $("#charlas").html(data);
      },
    });
  };

	 function cargarCharla(idcharla){
	  $.ajax({
	 	 type: "GET",
	 	 dataType: "html",
	 	 url: 'index.php?admin=charla&id_charla='+ idcharla,
	 	 success: function(data){
	 		 $("#charlas").html(data);
	 		 $("#cuerpo").html(data);

	 	 },
	 	 error: function(){
	 		 alert("error");
	 	 }
	  })
	 };

	 $('#charlas').on('click',"a.ver",function(){
	  var idcharla=this.getAttribute('idcharlav');
	 	cargarCharla(idcharla);
	 });

   function borrarimagen(idimg){
     $.ajax(
       {
         method: "DELETE",
         url: 'index.php?admin=eliminar_img&id_imagen='+ idimg
       })
     .done(function() {
        $('#img'+idimg).remove();
     })
     .fail(function(data) {
       alert('Imposible borrar la imagen');
     });
   }

   $('#charlas').on('click', 'a.eliminarimg', function() {
     var idimg = this.getAttribute('idimg');
     borrarimagen(idimg);
   });
  cargarCharlas('charlasAdmin');
});
