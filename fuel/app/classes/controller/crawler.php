<?php
require_once dirname(__FILE__).'/../../vendor/simplehtmldom_1_5/simple_html_dom.php';
require_once dirname(__FILE__).'/../../vendor/parser.php';

class Controller_Crawler extends Controller_Base
{
	private $metas = array('title','keywords','description','canonical','prev','next','author');
	public function action_index()
	{
		// 結果
		$results = array();
		$post = Input::post();
		var_dump($post);
		$inputs = $this->parseUrls($post['urls']);
		//var_dump($inputs);die;
		$parser = new Parser();

		foreach ($inputs as $input ) {
			$input_url = $input[0];
			$data_i = array(
				'title' 		=> isset($input[1])?$input[1]:"",
				'keywords' 		=> isset($input[2])?$input[2]:"",
				'description' 	=> isset($input[3])?$input[3]:"",
				'canonical' 	=> isset($input[4])?$input[4]:"",
				'prev'			=> isset($input[5])?$input[5]:"",
				'next' 			=> isset($input[6])?$input[6]:"",
				'author' 		=> isset($input[7])?$input[7]:"",
			);
			$url = $this->makeUrl($input_url,$post['basicuser'],$post['basicpass']);

			try {
				$parser->clear();
				$parser->setUrl($url);
				//var_dump($parser->html());die;
				$data_g = array(
					'title' 		=> $parser->title(),
					'keywords' 		=> $parser->keywords(),
					'description' 	=> $parser->description(),
					'canonical' 	=> $parser->canonical(),
					'prev' 			=> $parser->prev(),
					'next' 			=> $parser->next(),
					'author' 		=> $parser->author(),
				);

				// var_dump($title,$keywords,$description,$canonical);
			} catch(Exception $e ) {
				var_dump($e);die;
			}
			$res = array();
			foreach ($this->metas as $meta ) {
				$res[$meta] = array(
					'assert' => $data_g[$meta] === $data_i[$meta],
					'input' => $data_i[$meta],
					'obtain' => $data_g[$meta],
				);
			}
			$results[] = array_merge(array('url' => $url),$res);

		}

		Debug::dump($results);

		// change view file by mode
		if ( $post['mode'] === "1" ) {
			$viewPath = 'crawler/crawle';
		} elseif($post['mode'] === "2") {
			$viewPath = 'crawler/assert';
		}

		// View表示
		$this->template->content = View::forge($viewPath, array('results'=>$results));
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
			$outputs[] = array_map(function($val){
				return trim($val,"\n\r");
			},explode("\t",$line));
		}

		return $outputs;
	}

	private function unAuthUrl($url)
	{
		$output = '';

		return $output;
	}
}