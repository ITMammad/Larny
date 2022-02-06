<?php
if (isset($_GET['navigate']) AND $_GET['navigate'] == "true") {

} else {
    http_response_code(404);
}
?>
<div style="background: aliceblue; width: 100vw; height: 100vh;">
    <div style="color: crimson;position: absolute;top: 50%;left: 50%;transform: translate(-50% , -50%);text-align: center;" class="404">
        <h1 style="font-size: 1500%;">404</h1>
        <h1 style="font-size: 350%;">Page Not Found!</h1>
    </div>
</div>