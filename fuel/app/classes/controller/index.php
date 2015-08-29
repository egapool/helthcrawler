<?php
class Controller_Index extends Controller_Base
{
	function action_index()
	{
		// View表示
		$this->template->content = View::forge("index/index");
	}
}