<?php
if (isset($_GET['uri'])) {
    if (! extension_loaded("curl")) {
        exit("This server doesn't support CURL...");
    } else {
        $CH = curl_init($_GET['uri']);
        curl_setopt($CH, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($CH);
        $body = substr( $response, 1024 );
        curl_close($CH);
        echo $response;
    }
} else {
    echo "Bad Request!";
}