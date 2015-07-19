<?php
require '../vendor/autoload.php';

$app = new \Slim\Slim(array(
    'debug' => true,
    'templates.path' => '../templates'
));

$app->get('/', function () use ($app){

    $url = "https://spreadsheets.google.com/feeds/cells/1jDzrpjnSqRMOTcXYBHgNlGQyAvF9HOad6ItMOSU8CQw/od6/public/values?alt=json";
    $file = file_get_contents($url);
    // var_dump(json_decode($file,true));exit;

    $app->render("index.php");
});

$app->run();