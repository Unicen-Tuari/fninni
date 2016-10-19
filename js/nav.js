$(document).ready(function () {
  function cargarnav(seccion){
    $.ajax({
      url:"index.php?action="+seccion,
      type: "get",
      dataType: "HTML",
      success: function(data){
          $("#content").html(data);
      },
    });
  };

  $('#linkHome').on('click', function(){
      cargarnav("home_secundario");
  });

  $('#linkQuerencia').on('click', function(){
      cargarnav("querencia");
  });

  $('#linkCharlas').on('click', function(){
      cargarnav("Charlas");
  });

  $('#linkVisitas').on('click', function(){
      cargarnav("Visitas");
  });

 function cargarCharla(idcharla){
  $.ajax({
 	 type: "GET",
 	 dataType: "html",
 	 url: 'index.php?action=Charlanav&id_charla='+ idcharla,
 	 success: function(data){
 		 $("#content").html(data);

 	 },
 	 error: function(){
 		 alert("error");
 	 }
  })
 };

 $('#content').on('click',"a.ver",function(){
  var idcharla=this.getAttribute('idcharlav');
 	cargarCharla(idcharla);
 });

});
