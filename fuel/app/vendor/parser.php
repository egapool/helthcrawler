<?php

class Parser
{
	private $html;

	private $device = 1;

	private $statusCode;

	public function __construct(){
		mb_language("Japanese");
	}

	public function setUrl($url)
	{
		$context = stream_context_create(array(
		    'http' => array('ignore_errors' => true)
		));
		$this->html = mb_convert_encoding(file_get_contents($url,false,$context), 'UTF-8', 'auto');
		$this->statusCode = $this->parseStatusCode($http_response_header[0]);
		var_dump($this->statusCode);
		sleep(1);
	}

	public function setDevice($deviceId)
	{
		if ( $deviceId !== 1 || $deviceId !== 2 || $deviceId !== 3 ) return;
		$this->device = $deviceId;
	}

	public function statusCode()
	{
		return $this->statusCode;
	}

	public function clear()
	{
		$this->html = "";
	}

	public function html()
	{
		return $this->html;
	}

	public function title()
	{
		$reg = '#<title>(.+)</title>#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function keywords()
	{
		$reg = '#<meta *name=["|\']keywords["|\'] *content=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function description()
	{
		$reg = '#<meta *name=["|\']description["|\'] *content=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function canonical()
	{
		$reg = '#<link *rel=["|\']canonical["|\'] *href=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function prev()
	{
		$reg = '#<link *rel=["|\']prev["|\'] *href=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function next()
	{
		$reg = '#<link *rel=["|\']next["|\'] *href=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	public function author()
	{
		$reg = '#<link *rel=["|\']author["|\'] *href=["|\']([^>]+)["|\']#i';
		preg_match($reg, $this->html, $matches);

		return isset($matches[1]) ? $matches[1] : "";
	}

	private function parseStatusCode($response)
	{
		if ( preg_match('/([0-9]{3})/',$response,$matches)) {
			return $matches[0];
		}
	}
}