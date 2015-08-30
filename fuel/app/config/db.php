<?php
/**
 * The staging database settings. These get merged with the global settings.
 */

return array(
    'default' => array(
        'type'        => 'mysqli',
        'connection'   => array(
            'hostname'   => 'localhost',
            'database'   => 'itobot',
            'socket'     => '/var/lib/mysql/mysql.sock',
            'username'   => 'rootd',
            'password'   => '',
            'port'       => '3306',
        ),
        'profiling'    => true,
    ),
);
