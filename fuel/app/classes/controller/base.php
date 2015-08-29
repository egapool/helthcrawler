<?php
class Controller_Base extends Controller_Hybrid
{
	public $template	= '';
	public $css			= '';
	public $js			= '';

	public function before()
	{
		$this->template = "template";
		parent::before();

		$this->css .=  Asset::css("bootstrap.min.css");
		$this->js .=  Asset::js("jquery.min.js");
	}

	public function after($response)
	{
		$response = parent::after($response);

		// css jsのセット
		$this->template->set('css', $this->css, false);
		$this->template->set('js', $this->js, false);

		return $response;
	}
}