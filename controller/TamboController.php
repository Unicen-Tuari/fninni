<?php

include_once 'view/homeView.php';
include_once 'model/Charla_Categoria.php';

//require('model/taskModel.php');

class TamboController
{
  //private $modelTambo;
  private $viewTambo;
  private $modelo;

  public function __construct()
  {
    //$this->modelTask = new TamboModel();
    $this->viewTambo = new TamboView();
    $this->modelo = new CharlaCategoria();
  }

  public function showInicio(){
    $this->viewTambo->show('home.tpl');
  }

  public function show($action){
    $this->viewTambo->show($action.'.tpl');
  }

  public function showQuerencia(){
    $this->viewTambo->show('querencia.tpl');
  }

  public function showHome(){
    $this->viewTambo->show('home.tpl');
  }
  public function showCharlas(){
    $this->viewTambo->showAdmin($this->modelo->GetCharlas(),'Charlas.tpl');
  }
  public function showCharla($idcharla){
    $this->viewTambo->showAdmin($this->modelo->GetCharla($idcharla),'Charlanav.tpl');
  }
  public function showVisitas(){
    $this->viewTambo->show('Visitas.tpl');
  }
  public function showABM(){
    $this->viewTambo->show('ABM.tpl');
  }

  public function AgregarCategoria()
  {
    if (isset($_REQUEST['categoria'])){
      $this->modelo->AgregarCategoria($_REQUEST['categoria']);
    }
  }
  public function MostrarCategorias($accion)
  {
      $this->viewTambo->showAdmin($this->modelo->GetCategorias(),$accion.'.tpl');
  }
  public function EliminarCategoria()
  {
    echo $this->modelo->EliminarCategoria($_REQUEST['id_categoria']);
  }
  public function eliminarImagen()
  {
    echo $this->modelo->EliminarImagen($_REQUEST['id_imagen']);
  }
  public function ModificarCategoria()
  {
    $this->modelo->ModificarCategoria($_REQUEST['nombre'],$_REQUEST['id_categoria']);
  }
  //charla
  public function AgregarCharla()
  {
    if (isset($_REQUEST['titulo'],$_REQUEST['descripcion'],$_REQUEST['nombre'],$_REQUEST['dropcat'])){
      $this->modelo->AgregarCharla($_REQUEST['titulo'],$_REQUEST['descripcion'],$_REQUEST['nombre'],$_REQUEST['dropcat'],$_FILES["imagesToUpload"]);
    }
  }
  public function MostrarCharlas($accion)
  {
      $this->viewTambo->showAdmin($this->modelo->GetCharlas(),$accion.'.tpl');
  }
  public function MostrarCharla($accion,$idcharla){
      $this->viewTambo->showAdmin($this->modelo->GetCharla($idcharla),$accion.'.tpl');
  }
  public function EliminarCharla()
  {
    echo $this->modelo->EliminarCharla($_REQUEST['id_charla']);
  }

  public function ModificarCharla()
  {
    echo $this->modelo->ModificarCharla($_REQUEST['id_charla'],$_REQUEST['titulo'],$_REQUEST['designado'],$_REQUEST['info'],$_REQUEST['id_cat']);
  }
  public function AgregarImagenes(){
    if(isset($_REQUEST['id_char']) && isset($_FILES["imagesToUpload2"])){
      $this->modelo->AgregarImagenes($_REQUEST['id_char'],$_FILES["imagesToUpload2"]);
    }else{
      echo '{ "result" :  "Faltan paramentros" }';
    }
  }

}




?>
