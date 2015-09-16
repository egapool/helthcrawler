<div id="content">
    <div class="row">
        <div class="col-md-12">
            <table class="table col-md-10">
                <tr>
                    <td>url</td>
                    <td>title</td>
                    <td>keywords</td>
                    <td>description</td>
                    <td>canonical</td>
                    <td>prev</td>
                    <td>next</td>
                    <td>author</td>
                    <td>statusCode</td>
                </tr>
                <?php //var_dump($results); ?>
                <?php foreach ($results as $res ): ?>
                <tr>
                    <td><a href="<?php echo $res['authedUrl']; ?>" target="_blank"><?php echo $res['url']; ?></a></td>
                    <td><?php echo $res['title']['obtain']?$res['title']['obtain']:"-"; ?></td>
                    <td><?php echo $res['keywords']['obtain']?$res['keywords']['obtain']:"-"; ?></td>
                    <td><?php echo $res['description']['obtain']?$res['description']['obtain']:"-"; ?></td>
                    <td><?php echo $res['canonical']['obtain']?$res['canonical']['obtain']:"-"; ?></td>
                    <td><?php echo $res['prev']['obtain']?$res['prev']['obtain']:"-"; ?></td>
                    <td><?php echo $res['next']['obtain']?$res['next']['obtain']:"-"; ?></td>
                    <td><?php echo $res['author']['obtain']?$res['author']['obtain']:"-"; ?></td>
                    <td><?php echo $res['statusCode']; ?></td>
                </tr>
                <?php endforeach; ?>
            </table>
        </div>
    </div>
</div>