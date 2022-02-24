<?php
include(__DIR__ . "/router.php");
include(__DIR__ . "/config.php");
include(__DIR__ . "/spa.php");
class Larny {
    public static string $rootElement = ".Larny";
    public static function Router()
    {
        return new class {
            public static function get($uri, callable $action) {
                $ROUTE = new ROUTE();
                $ROUTE::get($uri, $action);
            }
            public static function post($uri, callable $action) {
                $ROUTE = new ROUTE();
                $ROUTE::post($uri, $action);
            }
            public static function registerNotFoundPage(callable $action) {
                $ROUTE = new ROUTE();
                $ROUTE::registerNotFoundPage($action);
            }
        };
    }
    public static function Navigate($uri) {
        if( !extension_loaded('curl')){
            exit('cURL Disabled On Your PHP Environment!!!');
        }
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $uri);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        $response = curl_exec($ch);
        $body = substr( $response, 1024 );
        curl_close($ch);
        echo '
            <script>
                document.querySelector("' . self::$rootElement . '").innerHTML = "' . $body . '";
            </script>
        ';
    }
    public static function registerRootElement($element) {
        self::$rootElement = $element;
    }
}