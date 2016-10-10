$(document).ready(function(){//modificacion y eliminacion de la lista
	function EliminarCategoria(id){
		$.ajax({
			type: "DELETE",
			url: 'index.php?admin=eliminar_categoria&id_categoria=' + id,
			})
			.done(function(msg){
				if(msg=="eliminado"){
					$("#categoria"+id).remove();
					$("#dropcategoria"+id).remove();
				}else {
					alert(msg);
				}
			})
	    .fail(function(msg){
				alert(msg);
				alert("fail");
			});
		};

	function ModificarCategoria(nombrecat,id_categoria){
    $.ajax(
      {
        method: "PUT",
        url: "index.php?admin=modificar_categoria&id_categoria=" + id_categoria+"&nombre="+ nombrecat,
      })
    .done(function() {
      $('#nombre'+id_categoria).html(nombrecat);// remplazar en el dom nombre+id
			$("#dropcategoria"+id_categoria).html(nombrecat);//aca en el dropdown de categorias
    })
    .fail(function() {
      alert('Imposible modificar la categoria');
    });
  }


	$(".eliminar").on("click",function (event) {
		event.preventDefault();
		id_categoria=event.target.href;//guardo la url del click
		var post_ultimabarra=id_categoria.lastIndexOf("/");
		id_categoria=id_categoria.substr(post_ultimabarra+1);
		EliminarCategoria(id_categoria);
	});

	$('.modificar').on('click', function(event) {
     event.preventDefault();
     var id_categoria = this.getAttribute('idcatm');//id propio (unico)que le asigne para ser diferentes mismo nombre diferentes id
		 var post_guion=id_categoria.lastIndexOf("-");//me quedo con el id de categoria
		 var nombre=id_categoria.substr(0,post_guion);//me quedo con el nombre
		 id_categoria=id_categoria.substr(post_guion+1);//reasigno mi variable para luego asignarla
		 $('#updatecat').val(nombre);//imput del modal,le seteo el valor de la categoria que quiero modificar
		 $('#nuevoNombreCat').attr("idcat",id_categoria);//al atributo del boton le asigno el id para luego obtenerlo
   });

	$("#nuevoNombreCat").on("click", function(event){
     event.preventDefault();
     var nuevonombre=$('#updatecat').val();
		 var id_categoria=this.getAttribute("idcat");
     if(nuevonombre.length > 4){
       ModificarCategoria(nuevonombre,id_categoria);
     }
   });


});
