$(document).ready(function(){
	$("#linkHome").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "home_secundario.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkHtml1").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "HTML1.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkCharlas_matu").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Charlas_matu.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkCharlas_matu2").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Charlas_matu.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkVisitas").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Visitas.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkVisitas2").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Visitas.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkVisitas3").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Visitas.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

$(document).ready(function(){
	$("#linkActualidad").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: "html",
			url: "Actualidad.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});

function vacaMu(){
    document.getElementById('muu').play();
			}

function enviarEinsertar(){
					var horario = $("#horario").val();
				  var dias = $("#dias").val();
				  var charlaVisita = $("#charlaVisita").val();
				  var grupo = 26;
				  var informacion = [horario, dias, charlaVisita];
				  var info = {
				      "group": grupo,
				      "thing": informacion
				      };

				  if (grupo && informacion){
				    $.ajax({
				       type: "POST",
				       dataType: 'JSON',
				       data: JSON.stringify(info),
				       contentType: "application/json; charset=utf-8",
				       url: "http://web-unicen.herokuapp.com/api/create",
							 success: function(data){
					        traercharlas();
									alert('Se agrego correctamente');

					       },
					       error:function(data){
					         alert('No se pudo comunicar con el servidor');
					       }
				    });
				  }
			}

		function traercharlas(){
			  var grupo = 26;
			  $.ajax({
			     type: "GET",
			     dataType: 'JSON',
			     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
			     success: function(data){
			        var horario = "";
			        var dias = "";
			        var charlaVisita = "";
							$("#cuerpotabla").html('');
			        for (var i = 0; i < data.information.length; i++) {
				         horario = data.information[i]['thing'][0];
				         dias = data.information[i]['thing'][1];
				         charlaVisita = data.information[i]['thing'][2];
				         $("#cuerpotabla").append("<tr><td>" + horario + "</td><td>" + dias + "</td><td>" + charlaVisita + "</td></tr>");
			        }

			     }
			  });
			}

	$('document').ready(function(){

				// Definicion de Variables
				grupo = 26;
				function guardarInformacion(grupo){
				var horario = $("#horario").val();
			  var dias = $("#dias").val();
				var charlaVisita = $("#charlaVisita").val();
			  var informacion = [horario, dias, charlaVisita];
			  var info = {
						  "group": grupo,
				      "thing": informacion
							      };

				  if (grupo && informacion){
						    $.ajax({
						       type: "POST",
						       dataType: 'JSON',
						       data: JSON.stringify(info),
						       contentType: "application/json; charset=utf-8",
						       url: "http://web-unicen.herokuapp.com/api/create",
									 success: function(data){
							        traercharlas();
											alert('Se agrego correctamente');

							       },
							       error:function(data){
							         alert('No se pudo comunicar con el servidor');
							       }
						    });
						  }
					}

							function traercharlas(){
								  $.ajax({
								     type: "GET",
								     dataType: 'JSON',
								     url: "http://web-unicen.herokuapp.com/api/group/" + grupo,
								     success: function(data){
								        var horario = "";
								        var dias = "";
								        var charlaVisita = "";
												$("#cuerpotabla").html('');
								        for (var i = 0; i < data.information.length; i++) {
									         horario = data.information[i]['thing'][0];
									         dias = data.information[i]['thing'][1];
									         charlaVisita = data.information[i]['thing'][2];
									         $("#cuerpotabla").append("<tr><td>" + horario + "</td><td>" + dias + "</td><td>" + charlaVisita + "</td></tr>");
								        }

								     }
								  });
								}
					traercharlas(grupo);

					// Llama a la Funcion cargarActividades cuando se Presiona el Boton Correspondiente
					$('#agregar').on('click', function(event){
						event.preventDefault();
						guardarInformacion(grupo);
					});
				});
