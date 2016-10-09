$(document).ready(function(){
	function EliminarCategoria(id_categoria){
		$.ajax({
			type: "DELETE",
			url: 'index.php?admin=eliminar_categoria&id_categoria=' + id_categoria,
			success: function(){
				$("#categoria"+id_categoria).remove();
				$("#dropcategoria"+id_categoria).remove();
			},
			error: function(){
				alert("error");
			}
		})
	};
	$(".eliminar").on("click",function (event) {
		event.preventDefault();
		var id_categoria=event.target.href;//guardo la url del click
		var post_ultimabarra=id_categoria.lastIndexOf("/");
		id_categoria=id_categoria.substr(post_ultimabarra+1);
		EliminarCategoria(id_categoria);
	})


});
