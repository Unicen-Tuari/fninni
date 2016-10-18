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

public function GetNombreCategoria($id)
{
  $queryselect=$this->db->prepare('SELECT nombre FROM categoria WHERE id_categoria=?');
  $queryselect->execute([$id]);
  $categoria=[];
  $categoria=$queryselect->fetch(PDO::FETCH_ASSOC);
  return $categoria["nombre"];
}


public function EliminarCategoria($categoria)
{
    $queryselect=$this->db->prepare('SELECT 1 FROM charla WHERE fk_categoria=?');
    $queryselect->execute([$categoria]);
    $exist=$queryselect->fetch();

    if(!$exist){
      //$this->db->beginTransaction();
      $eliminar=$this->db->prepare('DELETE FROM categoria where id_categoria=?');
      $eliminar->execute([$categoria]);
      return 'eliminado';
    }else{
      return 'No se puede eliminar';
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
public function AgregarCharla($titulo,$descripcion,$nombre,$id_categoria,$images)
{
  try {
    $this->db->beginTransaction();
    $queryinsert=$this->db->prepare('INSERT INTO charla(titulo,designado,info,fk_categoria) VALUES(?,?,?,?)');
    $queryinsert->execute([$titulo,$nombre,$descripcion,$id_categoria]);
    $id_charla = $this->db->lastInsertId();
    $this->AgregarImagenes($id_charla,$images);
    $this->db->commit();

  } catch (Exception $e) {
    $this->db->rollBack();
  }
}

public function GetCharlas()
{
  $queryselect=$this->db->prepare('SELECT * FROM charla ORDER BY id_charla');
  $queryselect->execute();
  $charlas=[];
  $charlas=$queryselect->fetchall(PDO::FETCH_ASSOC);
  foreach ($charlas as &$charla) {
    $charla["nombre_categoria"]=$this->GetNombreCategoria($charla["fk_categoria"]);
  }
  return $charlas;
}

public function EliminarCharla($charla)
{
    $eliminar=$this->db->prepare('DELETE FROM charla where id_charla=?');
    $eliminar->execute([$charla]);
    return "elimina";
}

public function ModificarCharla($id_charla,$titulo,$designado,$info,$id_cat){
  try {
    $this->db->beginTransaction();
    $queryupdate=$this->db->prepare('UPDATE  charla  SET titulo=?, designado=?, info=?, fk_categoria=? WHERE id_charla=?');
    $queryupdate->execute([$titulo,$designado,$info,$id_cat,$id_charla]);
    $this->db->commit();
    return "guardo";// para postman
  } catch (Exception $e) {
    $this->db->rollBack();
    return "roll";
  }
}
/////////Imagenes
private function subirImagenes($imagenes){
    $carpeta = "uploads/imagenes/";
    $destinos_finales = array();
    foreach ($imagenes["tmp_name"] as $key => $value) {
      $destinos_finales[] = $carpeta.uniqid().$imagenes["name"][$key];
      move_uploaded_file($value, end($destinos_finales));
    }

    return $destinos_finales;
  }
function AgregarImagenes($id_charla, $imagenes){
  if($imagenes){
    $rutas=$this->subirImagenes($imagenes);
    $consulta = $this->db->prepare('INSERT INTO imagen(fk_charla,path) VALUES(?,?)');
    foreach($rutas as $ruta){
      $consulta->execute(array($id_charla,$ruta));
    }
  }
}
}
 ?>
