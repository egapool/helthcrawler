<?php
require '../vendor/autoload.php';

use Assetic\Asset\AssetCollection;
use Assetic\Asset\FileAsset;

$js = new AssetCollection(array(
    new FileAsset(__DIR__.'/lib/jquery.min.js'),
    new FileAsset(__DIR__.'/lib/bootstrap.min.js'),
    new FileAsset(__DIR__.'/lib/underscore-min.js'),
    new FileAsset(__DIR__.'/lib/backbone-min.js'),
    new FileAsset(__DIR__."/assets/js/handlebars-v3.0.3.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/namespace.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/templates/layout.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/header.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/urlpage.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/footer.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/key.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/urllist.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/url.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/views/container.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/models/url.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/collections/urllist.js"),
    new FileAsset(__DIR__."/assets/js/backbonejs/router.js"),
));

header('Content-Type: application/js');
echo $js->dump();