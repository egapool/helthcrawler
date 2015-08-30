<?php

class Parser
{
	private $html;

	public function __construct(){

	}

	public function setUrl($url)
	{
		$this->html = mb_convert_encoding(file_get_contents($url), 'UTF-8', 'auto');
		sleep(1);
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
}