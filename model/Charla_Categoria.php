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
public function EliminarCategoria($categoria)
{
  try {
    $this->db->beginTransaction();
    $eliminar=$this->db->prepare('DELETE FROM categoria where id_categoria=?');
    $eliminar->execute([$categoria]);
    $this->db->commit();
  } catch (Exception $e) {
    $this->db->rollBack();
  }

}
public function ModificarCategoria($nombre,$id_categoria)
{
   if (strlen($nombre) >3)
   {
     try{
       $this->db->beginTransaction();
       $queryupdate=$this->db->prepare('UPDATE categoria SET nombre=? where id_categoria=?');
       $queryupdate->execute([$nombre,$id_categoria]);
       $this->db->commit();
     }catch(Exception $e){
       $this->db->rollBack();
     }
   }
}
////charla
public function AgregarCharla($titulo,$descripcion,$nombre,$id_categoria)
{
  try {
    $this->db->beginTransaction();
    $queryinsert=$this->db->prepare('INSERT INTO charla(titulo,designado,info,fk_categoria) VALUES(?,?,?,?)');
    $queryinsert->execute([$titulo,$nombre,$descripcion,$id_categoria]);
    $this->db->commit();

  } catch (Exception $e) {
    $this->db->rollBack();
  }

}

}
 ?>
