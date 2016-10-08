<?php
include_once 'libs/Smarty.class.php';

class TamboView {
  private $smarty;
  private $titulopag;

  public function __construct(){
    $this->titulopag ='Don Carmelo';
    $this->smarty = new Smarty;
    //$this->smarty->debugging = true;
  }

  function show($a){
    $this->smarty->display($a);
  }
  public function showAdmin($elementos,$a)
  {
    $this->smarty->assign('elementos',$elementos);
    $this->show($a);
  }
}


?>
