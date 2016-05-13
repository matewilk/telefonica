<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: accept, access-control-allow-origin');

require_once __DIR__ . '/vendor/autoload.php';

$klein = new \Klein\Klein();

function sendSNMPRequest($oid) {
	$session = new SNMP(SNMP::VERSION_2c, "home.solarisfire.com", "quan7umL3ap");
    	$data = $session->get($oid);
	return $data;
};

function extractValueFromString($string){
	return filter_var($string, FILTER_SANITIZE_NUMBER_INT);
}

$klein->respond('GET', '/', function ($request, $response) {
	$data = sendSNMPRequest("1.3.6.1.4.1.13315.3.1.2.2.2.1.1.0");
	$int = extractValueFromString($data);

	return json_encode(array('value'=>$int));
});

$klein->dispatch();

?>
