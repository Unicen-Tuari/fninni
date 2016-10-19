
<div class="col-sm-8 col-sm-offset-2">
<table class="table " ><!-- Tabla donde 3x5 donde esta las charlas y visitas programadas -->
  <thead>
    <tr class="danger">
    <th ><p>Categoria</p></th>
    <th ><p>Charla</p></th>
    <th ><p>Personal Asignado</p></th>
    </tr>
    <tbody><!--Contenido de la tabla-->
      <tr class="warning">
      <td ><p>{$elementos["nombre_categoria"]}</p></td>
      <td ><p>{$elementos["titulo"]}</p></td>
      <td ><p>{$elementos["designado"]}</p></td>
    </tr>
    </tbody>
  </thead>
</table>
</div>
<div class="col-sm-8 col-sm-offset-2">
  <ul class="list-group-item col-sm-12">
    {$elementos["info"]}
  </ul>
  <ul class="list-group-item col-sm-12">
  {foreach $elementos["imagenes"] as $imagen}
    <img class="col-sm-4"src='{$imagen["path"]}' alt="no se cargo imagen" />
  {/foreach}
  </ul>
</div>
