<?php
return array(
    '_root_'  => 'index/index',  // The default route
    '_404_'   => 'welcome/404',    // The main 404 route

    '/' => 'index/index',
    '/(:alpha)' => 'index/index',

    'crawle' => 'crawler/index',
);
