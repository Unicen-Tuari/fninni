$(document).ready(function(){
	$("#linkHome").on("click",function(event){
		event.preventDefault();
		$.ajax({
			type: "GET",
			dataType: 'html',
			url: "http://thawing-gorge-3659.herokuapp.com/home.html",
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
			dataType: 'html',
			url: "http://thawing-gorge-3659.herokuapp.com/HTML1.html",
			success: function(data){
				$("#content").html(data);
			},
			error: function(){
				alert("error");
			}
		})
	})
});
/*
function getInformationByItem(){
  event.preventDefault();
  var item = $("#itemid")[0].value;
  $.ajax({
     type: "GET",
     dataType: 'JSON',
     url: "http://web-unicen.herokuapp.com/api/get/" + item,
     success: function(data){
       var html = "";
       html += "Id: " + data.information['_id'] + "</br>";
       html += "Grupo: " + data.information['group'] + "</br>";
       html += "Informacion: " + data.information['thing'] + "</br>";
       html += "--------------------- </br>";
       $("#infoItem").html(html);
     },
     error:function(data){
       console.log(data);
     }

  });
}
*/
