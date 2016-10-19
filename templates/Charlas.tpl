<label class="control-label col-sm-7 col-sm-offset-5" for="nombre">charlas</label>
{foreach $elementos as $charla}
  <ul class="list-group col-sm-8 col-sm-offset-2" id="charla{$charla['id_charla']}">
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
    <a class="glyphicon glyphicon-eye-open ver" idcharlav="{$charla['id_charla']}"></a>
  </ul>
{/foreach}
