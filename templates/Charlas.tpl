
  <div class="col-sm-8 col-sm-offset-2">
  <table class="table " >
    <thead >
      <tr class="danger">
      <th><p>Categoria</p></th>
      <th><p>Charla</p></th>
      <th><p>Descripcion</p></th>
      <!-- <th><p>Perosnal Autorizado</p></th> -->
      <th><p>Ver</p></th>
      </tr>
    </thead>
    <tbody>
      {foreach $elementos as $charla}
      <tr class="warning">
        <td>{$charla['nombre_categoria']}</td>
        <td>{$charla['titulo']}</td>
        <td>{$charla['info']}</td>
        <td><a class="glyphicon glyphicon-eye-open ver" idcharlav="{$charla['id_charla']}"></a></td>
      </tr>
      {/foreach}
    </tbody>
  </table>
  </div>
  <!-- <div class="col-sm-8 col-sm-offset-2">
  {foreach $elementos as $charla}

  <ul class="list-group" id="charla{$charla['id_charla']}">
        <!<ul class="list-group-item col-sm-1">
          {$charla['id_charla']}
        </ul> -->
        <!-- <ul class="list-group-item col-sm-2">
          {$charla['nombre_categoria']}
          <! Aqui agrego nuevo atributo para mostrar la categoria -->
        <!-- </ul>
        <ul class="list-group-item col-sm-3"id="titulo{$charla['id_charla']}">
          {$charla['titulo']}
        </ul>
        <ul class="list-group-item col-sm-6" id="descripcion{$charla['id_charla']}">
          {$charla['info']}
        </ul>  -->
        <!-- <ul class="list-group-item col-sm-2" id="designado{$charla['id_charla']}">
          {$charla['designado']}
        </ul> -->
        <!-- <ul class="list-group-item col-sm-1">
          <a class="glyphicon glyphicon-eye-open ver" idcharlav="{$charla['id_charla']}"></a>
        </ul>

  </ul>
{/foreach}
  </div>-->
