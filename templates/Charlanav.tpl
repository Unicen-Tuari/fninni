<label class="control-label col-sm-7 col-sm-offset-5" for="nombre">Charla</label>
<div class="col-sm-8 col-sm-offset-2">
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
    <img class="col-sm-4"src='{$imagen["path"]}' alt="no se cargo imagen" />
  {/foreach}
  </ul>
</div>
