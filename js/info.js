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
