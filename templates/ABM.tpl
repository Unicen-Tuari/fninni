<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>ABM</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
  </head>
  <body>
      <div class="row col-md-1 col-md-offset-11"><!--//oculto-->
        <form id="imgAjax">
          <input class="col-md-1 col-md-offset-11" type="file"  id="imagesToUpload2" name="imagesToUpload2[]" multiple>
        </form>
      </div>
      <div class="col-sm-12">
        <div class="page-header">
         <h1>Lista de Charlas</h1>
        </div>

        <div class="col-sm-3">
          <form id="formcat">
            <div class="form-group">
              <label for="task"><h3>Categoria</h3></label>
              <input type="text" class="form-control" id="categoriai" name="categoria" placeholder="Categoria">
            </div>
            <button type="submit" id="nuevacat"class="btn btn-primary">Agregar</button>
          </form><br>
          <div  id="categoria">
            <!-- lista las categorias -->
          </div>
        </div>

        <div class="col-sm-9">

            <div id="charlas">
                <!-- lista de charlas -->
            </div>
             <form id="formcharla" >
               <div class="form-group">
                 <label for="task"><h3>Charla</h3></label>
                 <div class="col-sm-12">
                   <div class="col-sm-2">
                     <input type="text" class="form-control" id="titulo" name="titulo" placeholder="titulo">
                   </div>
                   <div class="col-sm-8">
                     <textarea class="form-control" maxlength="254" rows="3" id="descripcion" name="descripcion" placeholder="informacion"></textarea>
                   </div>
                   <div class="col-sm-2">
                     <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Personal Aut">
                   </div>
                   <div class="col-sm-12">
                    <div class="form-group col-sm-2">
        					    <select id="dropcat" name="dropcat">
                          <!-- categorias -->
              				</select>
              		  </div><br>

                    <span class="file-input btn btn-primary btn-file">
                      Cargar&hellip; <input class="cargar form-group col-sm-1 col-sm-offset-3" type="file"  id="imagesToUpload" name="imagesToUpload[]" multiple/>
                        </span>
                     <button type="submit" id="nuevacharla" class="btn btn-primary col-sm-2 col-sm-offset-1">Agregar</button>
                   </div>
                 </div>
               </div>
           </form>

      </div>
      <!-- MODAL CATEGORIA -->
     <div class="modal fade" id="myModalC" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modifique el nombre de la categoria:</h4>
          </div>
          <input id="updatecat" name="name" value="">
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Salir</button>
            <button type="button" class="btn btn-primary" id="nuevoNombreCat" idcat="numero" name="nuevoNombreCat" data-dismiss="modal">Guardar cambio</button>
          </div>
        </div>
      </div>
     </div>
         <!--  -->
 <!-- MODAL CHARLA -->
     <div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content  col-sm-12">
           <div class="modal-header col-sm-12">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Modifique La charla:</h4>
           </div>
           <div class="modal-body col-sm-12">
             <div class="form-group col-sm-3">
               <select id="dropcatm" name="dropcatm">
                 <option value="0">Categorias</option>
                 <!-- categorias -->
               </select>
             </div>
             <div class="col-sm-3  col-sm-offset-1">
              <input type="text" class="form-control" id="updatetitulo" name="titulo" placeholder="titulo">
             </div>
             <div class="col-sm-12">
              <textarea class="form-control" maxlength="254" rows="3" id="updatedescripcion" name="descripcion" placeholder="descripcion"></textarea>
             </div>
             <div class="col-sm-3 col-sm-offset-1">
              <input type="text" class="form-control" id="updatedesignado" name="designado" placeholder="Personal Aut.">
             </div>
           </div>
           <div class="modal-footer col-sm-12">
             <button type="button" class="btn btn-default" data-dismiss="modal">Salir</button>
             <button type="button" class="btn btn-primary" id="Charlamodificada" idchar="" name="Charlamodificada" data-dismiss="modal">Guardar cambios</button>
           </div>
        </div>
      </div>
     </div>
      </div>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/jquery-1.11.3.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/categoria.js"></script>
    <script src="js/imagen.js"></script>
    <script src="js/charla.js"></script>
  </body>
</html>
