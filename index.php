<?php

  include_once 'config/tamboConfig.php';
  include_once 'controller/tamboController.php';

  if (!array_key_exists(TamboConfig::$ACTION,$_REQUEST)||
$_REQUEST[TamboConfig::$ACTION] == TamboConfig::$ACTION_DEFAULT){
      // Home del sitio
      $controllerTambo = new TamboController();
      $controllerTambo->showInicio();
  }else{
    switch($_REQUEST[TamboConfig::$ACTION]){
      case TamboConfig::$ACTION_INICIO:
          $controllerTambo = new TamboController();
          $controllerTambo->showHome();
        break;
        case TamboConfig::$ACTION_QUERENCIA:
            $controllerTambo = new TamboController();
            $controllerTambo->showQuerencia();
        break;
        }
      }
  /*switch (isset($_GET[TamboConfig::$ACTION]) ? $_GET[TamboConfig::$ACTION] : TamboConfig::$ACTION ) {
      case TamboConfig::$ACTION_QUERENCIA:
          $controllerTambo->ShowQuerencia();
          break;

      default:
          $controllerTambo->showHome();
          break;
  }*/

?>
