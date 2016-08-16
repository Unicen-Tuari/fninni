<?php

require('libs/Smarty.class.php');

$smarty = new Smarty;

$smarty->assign("titulo","ejercicio 1");
$smarty->display("ejer1.tpl");



?>
