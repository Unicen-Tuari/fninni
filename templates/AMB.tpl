{include file='header.tpl'}
    {include file='nav.tpl'}
	<!-- ********************************************************************* -->
    <form action="" method="POST" enctype="multipart/form-data" id="addForm">
        <div class="form-group">
          <label for="task">New Task</label>
          <input type="text" class="form-control" id="task" name="task" placeholder="Insert task name here...">
          <label for="description">Task Description</label>
          <input type="text" class="form-control" id="description" name="description" placeholder="Insert task description here...">
          <label for="image">Image</label>
          <input type="file" name="image[]" id="image" multiple>
        </div>
        <button type="submit" id="addBtn" class="btn btn-default">Add</button>
      </form>
			<script src="js/informacion.js"></script>
	<!-- ********************************************************************* -->
	{include file='modal.tpl'}
	{include file='footer.tpl'}
