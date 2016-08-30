
/************************************************************************/

$('document').ready(function(){
  var tiradas = [0,0,0,0,0,0,0,0,0,0,0];
  var repetidas=[0,0,0,0,0,0];
  Dado.prototype.tirar= function(){
      this.valor= Math.floor(Math.random()*7+1);
      if (this.valor==7)
      {
          this.valor=1;
          imprimirRepetidas(1)
      }
      else {
        imprimirRepetidas(this.valor);
        document.getElementById(this.idHTML).src = "images/dado"+this.valor+".png";}
  }

  function Dado(idDado){//objeto dado
      this.valor=1;
      this.idHTML=idDado;
  }

  function Cubilete(){//objeto cubilete
      this.dado1=new Dado("dado1");
      this.dado2=new Dado("dado2");
      this.tirar=function()
      {
        this.dado1.tirar();
        this.dado2.tirar();
      }
      this.suma = function()
      {
          return this.dado1.valor + this.dado2.valor;
      }
  }

    function lanzarDados(alertas,cantidad){
      var sumaux=0;
      var noalert=alertas;
      var cubilete=new Cubilete();
      for (var i = 0; i < cantidad; i++) {
        cubilete.tirar();
        var suma = cubilete.suma();
        if (noalert)
          alert("valor de suma es "+suma);
        if (suma >= sumaux){
          sumaux=suma;
          }
        tiradas[suma-2]++;
        imprimir(suma);
      }
      if (noalert)
          alert("El valor mas alto es "+ sumaux);
    }

    function imprimir(suma){
      var resultado = document.getElementById(suma);
      resultado.innerHTML = tiradas[suma-2];

    }
    function imprimirRepetidas(num){
      var repe = document.getElementById("c"+num);
      repetidas[num-1]++;
      repe.innerHTML = repetidas[num-1];
    }
  $('#Masdecien').on('click', function(event){
      event.preventDefault();
      lanzarDados(0,document.getElementById('muchasveces').value);
    });
	$('#lanzar').on('click', function(event){
    event.preventDefault();
    lanzarDados(1,document.getElementById('veces').value);
  });
  $('#refresh_page').on('click', function(event){
    event.preventDefault();
      location.reload();
  })
});
