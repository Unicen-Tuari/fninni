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
        case TamboAdmin::$ADMIN_DROPDOWN:
        case TamboAdmin::$ADMIN_CATEGORIAS:
          $controllerTambo->MostrarCategorias($_REQUEST[TamboAdmin::$ADMIN]);
          break;
        case TamboAdmin::$ADMIN_ELIMINAR_CATEGORIA:
          $controllerTambo->EliminarCategoria();
          break;
        case TamboAdmin::$ADMIN_UPDATE_CATEGORIA:
          $controllerTambo->ModificarCategoria();
          break;
        case TamboAdmin::$ADMIN_ADDCHARLA:
          $controllerTambo->AgregarCharla();
          break;
        case TamboAdmin::$ADMIN_CHARLAS:
          $controllerTambo->MostrarCharlas($_REQUEST[TamboAdmin::$ADMIN]);
          break;
        case TamboAdmin::$ADMIN_CHARLA:
          $controllerTambo->MostrarCharla($_REQUEST[TamboAdmin::$ADMIN],$_REQUEST[TamboAdmin::$IDCHARLA]);
          break;
        case TamboAdmin::$ADMIN_ELIMINAR_CHARLA:
          $controllerTambo->EliminarCharla();
          break;
        case TamboAdmin::$ADMIN_ELIMINAR_IMG:
          $controllerTambo->eliminarImagen();
          break;
        case TamboAdmin::$ADMIN_UPDATE_CHARLA:
          $controllerTambo->ModificarCharla();
          break;
        case TamboAdmin::$ADMIN_ADD_IMG:
            $controllerTambo->AgregarImagenes();
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
        case TamboConfig::$ACTION_HOME:
            $controllerTambo = new TamboController();
            $controllerTambo->show(TamboConfig::$ACTION_HOME);
          break;
        case TamboConfig::$ACTION_QUERENCIA:
            $controllerTambo = new TamboController();
            $controllerTambo->showQuerencia();
        break;
        case TamboConfig::$ACTION_CHARLAS:
            $controllerTambo = new TamboController();
            $controllerTambo->showCharlas();
        break;
        case TamboConfig::$ACTION_CHARLA:
            $controllerTambo = new TamboController();
            $controllerTambo->showCharla($_REQUEST[TamboAdmin::$IDCHARLA]);
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
