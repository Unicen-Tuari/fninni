<label class="control-label" for="nombre">Categorias</label>
{foreach $elementos as $categoria}
  <ul class="list-group col-sm-12" id="categoria{$categoria['id_categoria']}">
    <ul class="list-group-item col-sm-1 col-sm-offset-1">
      {$categoria["id_categoria"]}
    </ul>

    <ul class="list-group-item col-sm-8 col-sm-offset-1">
      {$categoria["nombre"]}
      <a class="glyphicon glyphicon-trash eliminar" href="{$categoria['id_categoria']}"></a>
      <a class="glyphicon glyphicon-edit modificar" href="{$categoria['id_categoria']}"></a>
    </ul>
  </ul>
{/foreach}
<script src="js/listacategorias.js"></script>
