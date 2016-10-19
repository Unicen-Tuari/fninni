$(document).ready(function(){//modificacion y eliminacion de la lista
	function EliminarCharla(id){
		$.ajax({
			type: "DELETE",
			url: 'index.php?admin=eliminar_charla&id_charla=' + id,
			})
			.done(function(msg){
				if(msg=="eliminado"){
					$("#charla"+id).remove();
				}else {
					alert(msg);
				}
			})
	    .fail(function(msg){
				alert(msg);
				alert("fail");
			});
		};

    	$(".eliminar").on("click",function (event) {
    		event.preventDefault();
    		id_charla=event.target.href;//guardo la url del click
    		var post_ultimabarra=id_charla.lastIndexOf("/");
    		id_charla=id_charla.substr(post_ultimabarra+1);
    		EliminarCharla(id_charla);
    	});

			function ModificarCharla(id_cat,titulo,descrip,designado,id_charla,nomcat){
		    $.ajax(
		      {
		        method: "PUT",
		        url: "index.php?admin=modificar_charla&id_charla=" + id_charla+"&titulo="+ titulo+"&info="+ descrip+"&designado="+ designado+"&id_cat="+ id_cat,
		      })
		    .done(function() {
					$('#titulo'+id_charla).html(titulo);
					$('#descripcion'+id_charla).html(descrip);
					$('#designado'+id_charla).html(designado);
					$('#categoria'+id_charla).html(nomcat);
					$('#categoria'+id_charla).attr("idcha",id_cat);
					// remplazar en el dom nombre+id
					//////aca agregar html
					//$("#dropcategoria"+id_categoria).html(nombrecat);//aca en el dropdown de categorias
		    })
		    .fail(function() {
		      alert('Imposible modificar la charla');
		    });
		  };

			$(".modificar").on('click', function() {
		    		var id = this.getAttribute("idchar");
						$('#dropcatm').val($('#categoria'+id).attr("idcha"));
		        $('#updatetitulo').val($('#titulo'+id).html());
		        $('#updatedescripcion').val($('#descripcion'+id).html());
		        $('#updatedesignado').val($('#designado'+id).html());
						$('#Charlamodificada').attr("idchar",id);//al atributo del boton le asigno el id para luego obtenerlo
		    });

			$("#Charlamodificada").on("click", function(event){
		     event.preventDefault();
				 var id_cat=$('#dropcatm').val();
				 var nomcat=$("#dropcategoria"+id_cat).html();
				 var titulo=$('#updatetitulo').val();
				 var descrip=$('#updatedescripcion').val();
				 var designado=$('#updatedesignado').val();
				 var id_charla=this.getAttribute("idchar");
		    	ModificarCharla(id_cat,titulo,descrip,designado,id_charla,nomcat);
		   });


})
