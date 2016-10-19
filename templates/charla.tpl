<label class="control-label" for="nombre">Charla</label>
<div class="col-sm-12">
  <ul class="list-group-item col-sm-3">
    {$elementos["id_charla"]}
  </ul>
  <ul class="list-group-item col-sm-3">
    {$elementos["nombre_categoria"]}
  </ul>
    <ul class="list-group-item col-sm-3">
      {$elementos["titulo"]}
    </ul>
  <ul class="list-group-item col-sm-3">
    {$elementos["designado"]}
  </ul>
  <ul class="list-group-item col-sm-12">
    {$elementos["info"]}
  </ul>
  <ul class="list-group-item col-sm-12">
  {foreach $elementos["imagenes"] as $imagen}
    <div id="img{$imagen['id_imagen']}" class="col-sm-4">
      <img class="col-sm-10"src='{$imagen["path"]}' alt="no se cargo imagen" />
      <a class="glyphicon glyphicon-trash eliminarimg col-sm-1" idimg="{$imagen['id_imagen']}"></a>
    </div>
  {/foreach}
  </ul>
</div>
<!-- Este tpl charla es el que usa admin para ver las charlas y eliminar imagenes -->
