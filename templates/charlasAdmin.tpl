<label class="control-label" for="nombre">charlas</label>
{foreach $elementos as $charla}
  <ul class="list-group col-sm-12" id="charla{$charla['id_charla']}">
        <ul class="list-group-item col-sm-1">
          {$charla['id_charla']}
        </ul>
        <ul class="list-group-item col-sm-2">
          {$charla['fk_categoria']}
        </ul>
        <ul class="list-group-item col-sm-2">
          {$charla['titulo']}
        </ul>
        <ul class="list-group-item col-sm-4">
          {$charla['info']}
        </ul>
        <ul class="list-group-item col-sm-2">
          {$charla['designado']}
        </ul>
    <a class="glyphicon glyphicon-trash eliminar" href="{$charla['id_charla']}"></a>
  </ul>
{/foreach}

<script src="js/listacharla.js"></script>
