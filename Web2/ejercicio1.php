<?php

require('libs/Smarty.class.php');

$smarty = new Smarty;
/*
$smarty->assign("titulo","ejercicio 1");
$smarty->display("ejer1.tpl");
ejercicio 1
*/
$smarty->assign("titulo","ejercicio 2");
$smarty->display("ejer2.tpl");

?>
