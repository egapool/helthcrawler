<?php
require_once dirname(__FILE__).'/../../vendor/simplehtmldom_1_5/simple_html_dom.php';
require_once dirname(__FILE__).'/../../vendor/parser.php';

class Controller_Crawler extends Controller_Base
{
	public function action_index()
	{
		// 結果
		$results = array();

		$post = Input::post();
		$inputs = $this->parseUrls($post['urls']);
		//var_dump($inputs);die;
		$parser = new Parser();

		foreach ($inputs as $input ) {
			$input_url 			= $input[0];
			$input_title 		= $input[1];
			$input_keywords 	= $input[2];
			$input_description 	= $input[3];
			$url 				= $this->makeUrl($input_url,$post['basicuser'],$post['basicpass']);

			try {
				$parser->clear();
				$parser->setUrl($url);
				//var_dump($parser->html());die;
				$title 			= $parser->title();
				$keywords 		= $parser->keywords();
				$description 	= $parser->description();
				$canonical 		= $parser->canonical();
			} catch(Exception $e ) {
				var_dump($e);die;
			}
			$results[] = array(
				'url' => $url,
				'title' => array(
					'assert' => $title === $input_title,
					'input' => $input_title,
					'obtain' => $title,
				),
				'keywords' => array(
					'assert' => $keywords === $input_keywords,
					'input' => $input_keywords,
					'obtain' => $keywords,
				),
				'description' => array(
					'assert' => $description === $input_description,
					'input' => $input_description,
					'obtain' => $description,
				),
			);

		}
		//var_dump($results);die;

		// View表示
		$this->template->content = View::forge("crawler/index",array('results'=>$results));
	}

	private function makeUrl($url,$user=null,$pass=null)
	{
		$output = '';
		$output = $url;
		if ( $user && $pass ) {
			$parsed = parse_url($url);
			$path = isset($parsed['path'])? $parsed['path']:"";
			$output = $parsed['scheme'].'://'.$user.':'.$pass.'@'.$parsed['host'].$path;
		}
		return $output;
	}

	private function parseUrls($urls)
	{
		$outputs = array();

		$array = explode("\n",$urls);
		foreach ($array as $line ) {
			if ($line == "") continue;
			$outputs[] = array_map(function($val){return trim($val,"\n\r");},explode("\t",$line));
		}

		return $outputs;
	}

	private function unAuthUrl($url)
	{
		$output = '';

		return $output;
	}
}