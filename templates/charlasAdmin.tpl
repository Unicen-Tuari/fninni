<label class="control-label" for="nombre">charlas</label>
{foreach $elementos as $charla}
  <ul class="list-group col-sm-12" id="charla{$charla['id_charla']}">
        <ul class="list-group-item col-sm-1">
          {$charla['id_charla']}
        </ul>
        <ul class="list-group-item col-sm-2">
          {$charla['nombre_categoria']}
          <!-- Aqui agrego nuevo atributo para mostrar la categoria -->
        </ul>
        <ul class="list-group-item col-sm-2"id="titulo{$charla['id_charla']}">
          {$charla['titulo']}
        </ul>
        <ul class="list-group-item col-sm-4" id="descripcion{$charla['id_charla']}">
          {$charla['info']}
        </ul>
        <ul class="list-group-item col-sm-2" id="designado{$charla['id_charla']}">
          {$charla['designado']}
        </ul>
    <a class="glyphicon glyphicon-trash eliminar" href="{$charla['id_charla']}"></a>
    <a class="glyphicon glyphicon-edit modificar" data-toggle="modal" data-target="#myModal2"
    idchar="{$charla['id_charla']}-{$charla['fk_categoria']}-{$charla['titulo']}-{$charla['info']}-{$charla['designado']}"></a>
    <a class="glyphicon glyphicon-picture botonAgregarImagenes" href="{$charla['id_charla']}"></a>
  </ul>
{/foreach}

<script src="js/listacharla.js"></script>
<script src="js/imagen.js"></script>
