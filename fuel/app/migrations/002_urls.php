<?php

namespace Fuel\Migrations;

class Urls
{

    function up()
    {
        \DBUtil::create_table('urls', array(
            'id'            => array('type' => 'int',       'constraint' => 5,'auto_increment' => true),
            'site_id'       => array('type' => 'int',       'constraint' => 5),
            'url'           => array('type' => 'varchar',   'constraint' => 255),
            'device'        => array('type' => 'int',       'constraint' => 1),
            'title'         => array('type' => 'varchar',   'constraint' => 255),
            'keywords'      => array('type' => 'varchar',   'constraint' => 255),
            'description'   => array('type' => 'text'),
            'canonical'     => array('type' => 'varchar',   'constraint' => 255),
            'prev'          => array('type' => 'varchar',   'constraint' => 255),
            'next'          => array('type' => 'varchar',   'constraint' => 255),
            'author'        => array('type' => 'varchar',   'constraint' => 255),
            'created_at'    => array('type' => 'int',       'constraint' => 11),
            'updated_at'    => array('type' => 'int',       'constraint' => 11),
        ), array('id'));
    }

    function down()
    {
       \DBUtil::drop_table('posts');
    }
}