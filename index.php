<?php

  include_once 'config/tamboConfig.php';
  include_once 'config/tamboAdmin.php';
  include_once 'controller/tamboController.php';


  $controllerTambo = new TamboController();
  if (!array_key_exists(TamboConfig::$ACTION,$_REQUEST)){
    if (array_key_exists(TamboAdmin::$ADMIN,$_REQUEST)){
      switch ($_REQUEST[TamboAdmin::$ADMIN]) {
        case TamboAdmin::$ADMIN_ADDCAT:
          $controllerTambo->AgregarCategoria();
          break;
      }
    }else{
        // Home del sitio
      $controllerTambo->showInicio();
    }

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
        case TamboConfig::$ACTION_CHARLAS:
            $controllerTambo = new TamboController();
            $controllerTambo->showCharlas();
        break;
        case TamboConfig::$ACTION_VISITAS:
            $controllerTambo = new TamboController();
            $controllerTambo->showVisitas();
        break;
        case TamboConfig::$ACTION_ABM:
            $controllerTambo = new TamboController();
            $controllerTambo->showABM();
        break;
        }
      }

?>
