<div id="content">
	<div class="row">
		<form action="/crawle" method="POST" class="col-md-10 col-md-offset-1">
			<div class="form-group">
				<label for="basicUser">Basic User</label>
				<input type="text" name="basicuser" class="form-control" id="basicUser" placeholder="user">
			</div>
			<div class="form-group">
				<label for="basicpass">Basic Pass</label>
				<input type="text" name="basicpass" class="form-control" id="basicPass" placeholder="password">
			</div>
			<textarea name="urls" class="form-control" rows="8"></textarea>
			<div class="radio">
			  <label>
			    <input type="radio" name="mode" id="optionsRadios1" value="1" checked>
			    取得モード
			  </label>
			</div>
			<div class="radio">
			  <label>
			    <input type="radio" name="mode" id="optionsRadios2" value="2">
			    一致モード
			  </label>
			</div>
			<div class="device">
			  <label>
			    <input type="radio" name="device" id="device1" value="1" checked>
			    PC
			  </label>
			</div>
			<div class="device">
			  <label>
			    <input type="radio" name="device" id="device2" value="2">
			    SP
			  </label>
			</div>
			<div class="device">
			  <label>
			    <input type="radio" name="device" id="device3" value="3">
			    MB
			  </label>
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-default">ITO!</button>
			</div>
		</form>
	</div>
</div>