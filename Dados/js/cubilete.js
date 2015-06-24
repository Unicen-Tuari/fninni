"use strict";

$(document).ready(function(){
var tiradas = [0,0,0,0,0,0,0,0,0,0,0];
var repetidas=[0,0,0,0,0,0];
var timer;

function lanzarUnDado(idDado) {
  var dado = document.getElementById(idDado);
  var num = Math.floor(Math.random()*7)+1;
  dado.src = "images/dado"+num+".png";
  if (num==7){
    imprimirRepetidas(1);
    return 1}
  else
      {imprimirRepetidas(num);
        return num;}
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
function  leyenda(){
  alert("valor");
  clearInterval(timer);
}

function lanzarDados()
{
  var sumaux=0;
  for (var i = 0; i < document.getElementById('veces').value; i++) {
    var suma = lanzarUnDado("dado1") + lanzarUnDado("dado2");
    timer=setInterval(leyenda, 2000);
    clearInterval(timer);
    alert("valor de suma es "+suma);
    if (suma >= sumaux){
      sumaux=suma;
      }
    tiradas[suma-2]++;
    imprimir(suma);
  }
    alert("El valor mas alto es "+ sumaux);
    clearInterval(timer);
}
function startTimer(){
  timer=setInterval(lanzarDados, 3000);
}

  $('#lanzar').on('click', function(event){
    event.preventDefault();
    lanzarDados();
  })
});
