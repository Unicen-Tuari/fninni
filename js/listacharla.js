$(document).ready(function(){//modificacion y eliminacion de la lista
	function EliminarCharla(id){
		$.ajax({
			type: "DELETE",
			url: 'index.php?admin=eliminar_charla&id_charla=' + id,
			})
			.done(function(msg){
					$("#charla"+id).remove();
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
})
