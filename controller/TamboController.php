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
}




?>
