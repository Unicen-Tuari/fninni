<?php

include_once 'view/homeView.php';

//require('model/taskModel.php');

class TamboController
{
  //private $modelTambo;
  private $viewTambo;

  public function __construct()
  {
    //$this->modelTask = new TamboModel();
    $this->viewTambo = new TamboView();
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


}
  /*public function addTask(){
    $added = false;
    if (isset($_POST['task']) && $_POST['task']!=''
        && isset($_POST['user']) && $_POST['user']!=''){
      $task = $_POST['task'];
      $user = $_POST['user'];
      $description = $_POST['description'];
      $this->modelTask->addTask($task,$description,$user);
      $added=true;
    }
    $this->getList($added);
  }
  public function deleteTask(){
    if (isset($_REQUEST['task'])){
      $task = $_REQUEST['task'];
      $this->modelTask->deleteTask($task);
    }
    $this->getList(false);
   }
   public function toggleStatusTask(){
     if (isset($_REQUEST['task'])){
       $task = $_REQUEST['task'];
       $this->modelTask->toggleStatusTask($task);
     }
     $this->getList(false);
   }
   */



?>
