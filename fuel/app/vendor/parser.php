<?php

class Parser
{
	private $html;

	private $device = 1;

	private $statusCode;

	public function __construct(){
	}

	public function setUrl($url)
	{
		$options = array(
			'http' => array(
				'ignore_errors' => true,
				'method' => 'GET',
			),
		);

		if ( $this->device === 2 ) //sp
		{
			$options['http']['header'] = 'User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 7_0 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) Version/7.0 Mobile/11A465 Safari/9537.53';
		}
		else if ( $this->device === 3 ) //mb
		{
			$options['http']['header'] = 'User-agent: KDDI-CA39 UP.Browser/6.2.0.13.1.5 (GUI) MMP/2.0';
		}
		$context = stream_context_create($options);
		$this->html = mb_convert_encoding(file_get_contents($url,false,$context), 'UTF-8', 'auto');
		$this->statusCode = $this->parseStatusCode($http_response_header[0]);
		sleep(1);
	}

	public function setDevice($deviceId)
	{
		if ( $deviceId !== 1 && $deviceId !== 2 && $deviceId !== 3 ) return;
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