$(document).ready(function(){
  var id_char = '';

  $('#charlas').on('click','a.botonAgregarImagenes', function(){
    id_char = this.getAttribute('idcharla');
    $('#imagesToUpload2').click();// abro el upload oculto para seleccionar img
  });

  $("#imagesToUpload2").on("change", function(event){
    // se ejecuta cuando acepto las img seleccionadas
    event.preventDefault();
    $('#imgAjax').submit();//esto es el envio del formulario con las img
  });

  $("#imgAjax").on("submit", function(event){
		event.preventDefault();
		$.ajax({
			method: "POST",
			url:"index.php?admin=agregar_imagenes&id_char=" + id_char,
			data: new FormData(this),//esto obtiene todas las img del form
			contentType : false,
			processData : false,
		})
		.done(function() {

		})
		.fail(function() {
			$('#').append('<li>Imposible agregar IMG</li>');
		});
  });

});
