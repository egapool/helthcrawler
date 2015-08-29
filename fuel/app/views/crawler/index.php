<div id="content">
	<div class="row">
	<div class="col-md-12">
			<table class="table col-md-10">
				<tr>
					<td>url</td>
					<td>title</td>
					<td>keywords</td>
					<td>description</td>
				</tr>
				<?php //var_dump($results); ?>
				<?php foreach ($results as $res ): ?>
				<tr>
					<td><?php echo $res['url']; ?></td>
					<td><?php echo $res['title']['assert']; ?></td>
					<td><?php echo $res['keywords']['assert']; ?></td>
					<td><?php echo $res['description']['assert']; ?></td>
				</tr>
				<?php endforeach; ?>
			</table>
		</div>
	</div>

</div>