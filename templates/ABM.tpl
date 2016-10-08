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
        <div class="col-sm-9">

            <div id="charlas">
                <!-- lista de productos -->
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
                     <input type="text" class="form-control" id="nombre" name="nombre" placeholder="P.Designado">
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
      <div class="col-sm-3">
        <div  id="categoria">
          <!-- lista las categorias -->
        </div>
        <form id="formcat">
          <div class="form-group">
            <label for="task"><h3>Categoria</h3></label>
            <input type="text" class="form-control" id="categoriai" name="categoria" placeholder="Categoria">
          </div>
          <button type="submit" id="nuevacat"class="btn btn-primary">Agregar</button>
        </form>
      </div>

      </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
