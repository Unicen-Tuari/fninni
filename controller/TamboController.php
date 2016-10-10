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

  public function showQuerencia(){
    $this->viewTambo->show('querencia.tpl');
  }

  public function showHome(){
    $this->viewTambo->show('home.tpl');
  }
  public function showCharlas(){
    $this->viewTambo->show('Charlas.tpl');
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
    $this->modelo->EliminarCategoria($_REQUEST['id_categoria']);
  }
  public function ModificarCategoria()
  {
    $this->modelo->ModificarCategoria($_REQUEST['nombre'],$_REQUEST['id_categoria']);
  }
  //charla
  public function AgregarCharla()
  {
    if (isset($_REQUEST['titulo'],$_REQUEST['descripcion'],$_REQUEST['nombre'],$_REQUEST['dropcat'])){
      $this->modelo->AgregarCharla($_REQUEST['titulo'],$_REQUEST['descripcion'],$_REQUEST['nombre'],$_REQUEST['dropcat']);
    }
  }
}




?>
