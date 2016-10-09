{if !empty($elementos)}
  <option value="0">Categorias</option>
  {foreach $elementos as $key=>$categoria}
    <option id="dropcategoria{$categoria['id_categoria']}" value="{$categoria['id_categoria']}">
    {$categoria["nombre"]}
    </option>
  {/foreach}
{else}
  <option value="0">No Existen Categorias</option>
{/if}
