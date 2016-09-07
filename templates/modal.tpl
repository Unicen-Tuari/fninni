<!-- finalizacion del article-->
    <!-- Modal para contactos ------------------------------------------------------------------>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">
            Si usted desea contactarnos para visitarnos o presenciar alguna charla por favor ingrese sus datos y env&iacute;elos.</h4>
          </div>
          <div class="modal-body">
            <form>
              <form class="form-inline">
                <div class="form-group">
                  <label for="exampleInputName2">Nombre(*):</label>
                  <input type="text" class="form-control" id="exampleInputName2" placeholder="Don Peron" required>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail2">Email(*)</label>
                  <input type="email" class="form-control" id="exampleInputEmail2" placeholder="menem2015@gmail.com" required>
                </div>
                Fecha de nacimiento: <input type="date" name="fecha"/><br><br>
                <div class="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
                      Profesor.
                    </label>
                </div>
                <div class="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                      Alumno.
                    </label>
                </div>
                <div class="radio">
                    <label>
                      <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3">
                      Otro.
                    </label>
                </div>
                Su n&uacutemero de tel&eacute;fono(*): <input type="tel" name="telefono" placeholder="(2344)-555555" required><br><br>
                <label for="message">Detalle el motivo de la visita:</label><br><br>
                <textarea class="form-control" placeholder="ej:...voy a comer cordero.Pablo lleva helado."></textarea><br><br>
                <div class="form-group">
                  <label for="exampleInputName2">(*)Campo requerido, por favor completar.</label>
                </div>
              </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            <button type="submit" class="btn btn-warning">Enviar</button><br><br>
          </div>
        </div>
      </div>
    </div>
