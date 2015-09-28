<?php

class Controller_Api_Urls extends Controller_Rest{

    public function get_index($siteId)
    {
        $site = DB::select('id')
            ->from(Model_Site::table())
            ->where('id','=',$siteId)
            ->execute()
            ->current();

        if ( $site ) {
            $urls = DB::select()
                ->from(Model_Url::table())
                ->where('site_id','=',$site['id'])
                ->execute()
                ->as_array();
            $this->response($urls, 200);
        } else {
            $this->response(array('ok'=>true), 403);
        }
    }

    public function put_index($siteId)
    {
        $put = json_decode(Input::put()['model'],true);

        if ( $this->isExist($siteId) ) {
            try {
                DB::transaction_start();
                DB::commit();
            } catch ( Exception $e ) {
                DB::rollback();
            }
        } else {

        }
    }

    public function post_index($siteId)
    {
        if ( !$this->isExist($siteId) ) {
            return $this->response(['ok'=>false,'message'=>'サイトが存在しません'],404);
        }
        $post = json_decode(Input::post()['model'],true);
        $created_at = time();
        $updated_at = time();

        try {
            foreach ( $post as $data ) {
                $this->insert($siteId,$data,$created_at,$updated_at);
            }

            return $this->response(['ok'=>true],200);
        } catch(Exception $e) {
            return $this->response(array(
                'ok' => false,
                'message' => $e->getMessage(),
            ),
            500);
        }
        var_dump($post);die;
    }

    private function insert($siteId,$data,$created_at,$updated_at)
    {
        $save_data = array(
            'site_id'      => $siteId,
            'url'         => $data['url'],
            'device'      => $data['device'],
            'title'       => $data['title'],
            'keywords'    => $data['keywords'],
            'description' => $data['description'],
            'canonical'   => $data['canonical'],
            'prev'        => $data['prev'],
            'next'        => $data['next'],
            'author'      => $data['author'],
            'created_at'  => $created_at,
            'updated_at'  => $updated_at,
        );

        DB::insert(Model_Url::table())
            ->set($save_data)
            ->execute();
    }

    public function delete_index($id)
    {
        DB::delete(Model_Site::table())
            ->where('id','=',$id)
            ->execute();
        $this->response(array('ok'=>true),200);
    }

    private function isExist($siteId)
    {
        $site = DB::select('id')
            ->from(Model_Site::table())
            ->where('id','=',$siteId)
            ->execute()
            ->current();
        return !empty($site);
    }
}