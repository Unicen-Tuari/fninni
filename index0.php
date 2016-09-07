<?php
include_once 'config/config_action.php';
include_once 'controller/controller.php';
//Tenga la clave action
//No tenga la clave action
//$_REQUEST['action']

if( !array_key_exists(ConfigAct::$ACTION, $_REQUEST) ||
$_REQUEST[ConfigAct::$ACTION] == ConfigAct::$ACTION_DEFAULT )
{
  $controller = new Controller();
  $controller->mostrarIndex();
}

else {
  switch ($_REQUEST[ConfigAct::$ACTION]) {
    case ConfigAct::$ACTION_INICIO:
      $controller = new Controller();
      $controller->mostrarInicio();
      break;
    case ConfigAct::$ACTION_CARTA:
      $controller = new Controller();
      $controller->mostrarCarta();
      break;

    default:
      echo 'Pagina no encontrada';
      break;
  }
}
?>
