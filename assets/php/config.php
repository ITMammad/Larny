<?php
if (!isset($_SESSION)) {
    session_start();
}
$server = "http://localhost:8080";
/*
** If you want a database connection, uncomment the below lines **
*/
// $dbh = "DB_HOST";
// $dbu = "DB_USER";
// $dbp = "DB_PASS";
// $dbn = "DB_NAME";
// $PDO = new PDO("DB_TYPE:host = $dbh; dbname = $dbn" , $dbu , $dbp);
// if (!$PDO) {
//     die("Error in connect to the database!");
// }
?>