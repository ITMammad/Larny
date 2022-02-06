<?php
  include(__DIR__ . "/assets/php/config.php");
  header("Access-Control-Allow-Origin: " . $server);
?>
<!DOCTYPE html>
<html dir="ltr" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="theme-color" content="#FFFFFF" />
<title>Larany app</title>
<link rel="apple-touch-icon" href="<?php echo $server; ?>/assets/img/logo.png" />
<link rel="icon" href="<?php echo $server; ?>/assets/img/logo.png" />
<meta name="description" content="A new Larany application powered by Larany framework" />
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/bootstrap.rtl.min.css">
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/bootstrap-tagsinput.css">
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/bootstrap-icons.min.css">
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/fontawesome-all.css">
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/style.min.css">
<link rel="stylesheet" href="<?php echo $server; ?>/assets/css/Larny.css">
<base href="<?php echo $server; ?>">
<script src="<?php echo $server; ?>/assets/js/bootstrap.min.js"></script>
<script src="<?php echo $server; ?>/assets/js/jquery.min.js"></script>
<script src="<?php echo $server; ?>/assets/js/app.js"></script>
<script src="<?php echo $server; ?>/assets/js/Larny.js"></script>
<link rel="manifest" href="<?php echo $server; ?>/assets/pwa/manifest.json" />
<script>
  var larny = new Larny();
  larny.SetRootElement(".Larny");
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./assets/pwa/ServiceWorker.js");
  };
</script>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div class="Larny">
  <?php
    include(__DIR__ . "/assets/php/router.php");
    ROUTE::get("/" , function() {
      include(__DIR__ . "/assets/pages/index.php");
    });
    ROUTE::registerNotFoundPage(function() {
      include(__DIR__ . "/assets/pages/404.php");
    });
  ?>
</div>
</body>
</html>