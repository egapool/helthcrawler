<div id="content">
	<div class="row">
	<div class="col-md-12">
			<table class="table col-md-10">
				<tr>
					<th>url</th>
                    <th>title</th>
                    <th>keywords</th>
                    <th>description</th>
                    <th>canonical</th>
                    <th>prev</th>
                    <th>next</th>
                    <th>author</th>
                    <th>statusCode</th>
				</tr>
				<?php //var_dump($results); ?>
				<?php foreach ($results as $res ): ?>
				<tr>
					<td><a href="<?php echo $res['authedUrl']; ?>" target="_blank"><?php echo $res['url']; ?></a></td>
                    <td><span class="<?php echo $res['title']['assert']?"success":"fail"; ?>" ><?php echo $res['title']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['keywords']['assert']?"success":"fail"; ?>" ><?php echo $res['keywords']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['description']['assert']?"success":"fail"; ?>" ><?php echo $res['description']['assert']?"○":"×"; ?></span></td>class="
                    <td><span class="<?php echo $res['canonical']['assert']?"success":"fail"; ?>" ><?php echo $res['canonical']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['prev']['assert']?"success":"fail"; ?>" ><?php echo $res['prev']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['next']['assert']?"success":"fail"; ?>" ><?php echo $res['next']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['author']['assert']?"success":"fail"; ?>" ><?php echo $res['author']['assert']?"○":"×"; ?></span></td>
                    <td><span class="<?php echo $res['statusCode']?"success":"fail"; ?>"><?php  echo $res['statusCode']; ?></span></td>
				</tr></span>
				<?php endforeach; ?>
			</table>
		</div>
	</div>

</div>