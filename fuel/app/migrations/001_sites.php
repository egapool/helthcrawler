<?php

namespace Fuel\Migrations;

class Sites
{

    function up()
    {
        \DBUtil::create_table('sites', array(
            'id'            => array('type' => 'int',       'constraint' => 5),
            'title'         => array('type' => 'varchar',   'constraint' => 100),
            'domain'        => array('type' => 'varchar',   'constraint' => 100),
            'user'          => array('type' => 'varchar',   'constraint' => 100),
            'pass'          => array('type' => 'varchar',   'constraint' => 100),
            'created_at'    => array('type' => 'int',       'constraint' => 11),
            'updated_at'    => array('type' => 'int',       'constraint' => 11),
        ), array('id'));
    }

    function down()
    {
       \DBUtil::drop_table('posts');
    }
}