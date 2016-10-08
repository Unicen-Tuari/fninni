<?php
/**
 *
 */
class CharlaCategoria
{
  private $db;

  function __construct()
  {
    $this->db=New PDO('mysql:host=localhost;dbname=web2;charset=utf8', 'root', '');
    $this->db->SetAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
  }

  public function AgregarCategoria($categoria)
  {
     if (strlen($categoria) >3)
     {
       try{
         $this->db->beginTransaction();
         $queryinsert=$this->db->prepare('INSERT INTO categoria(nombre) VALUES(?)');
         $queryinsert->execute([$categoria]);
         $this->db->commit();
       }catch(Exception $e){
         $this->db->rollBack();
       }
     }
  }
public function GetCategorias()
{
  $queryselect=$this->db->prepare('SELECT * FROM categoria ORDER BY id_categoria');
  $queryselect->execute();
  $categorias=[];
  $categorias=$queryselect->fetchall(PDO::FETCH_ASSOC);
  return $categorias;
}



}
 ?>
