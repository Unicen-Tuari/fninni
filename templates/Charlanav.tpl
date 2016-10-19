<label class="control-label col-sm-7 col-sm-offset-5" for="nombre"></label>
<div class="col-sm-6 col-sm-offset-2">
<table class="table " ><!-- Tabla donde 3x5 donde esta las charlas y visitas programadas -->
  <thead>
    <tr class="danger">
    <th class="col-sm-2"><p>Categoria</p></th>
    <th class="col-sm-3"><p>Charla</p></th>
    <th class="col-sm-3"><p>Personal Asignado</p></th>
    </tr>
    <tbody><!--Contenido de la tabla-->
      <th class="col-sm-3"><p>{$elementos["nombre_categoria"]}</p></th>
      <th class="col-sm-3"><p>{$elementos["titulo"]}</p></th>
      <th class="col-sm-3"><p>{$elementos["designado"]}</p></th>
    </tbody>
  </thead>
</table>
</div>
<div class="col-sm-8 col-sm-offset-2">
  <!-- <ul class="list-group-item col-sm-3">
    {$elementos["id_charla"]}
  </ul> -->
  <!-- <ul class="list-group-item col-sm-3">
    {$elementos["nombre_categoria"]}
  </ul>
    <ul class="list-group-item col-sm-3">
      {$elementos["titulo"]}
    </ul>
   <ul class="list-group-item col-sm-3">
    {$elementos["designado"]}
  </ul> -->
  <ul class="list-group-item col-sm-12">
    {$elementos["info"]}
  </ul>
  <ul class="list-group-item col-sm-12">
  {foreach $elementos["imagenes"] as $imagen}
    <img class="col-sm-4"src='{$imagen["path"]}' alt="no se cargo imagen" />
  {/foreach}
  </ul>
</div>
