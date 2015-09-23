<?php
class Controller_Index extends Controller_Base
{
    public function before()
    {
        parent::before();
    }

	public function action_index()
	{
		// View表示
		// $this->template->content = View::forge("index/index");
	}
}