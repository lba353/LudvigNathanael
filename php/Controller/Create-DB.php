<?php
    require_once(__DIR__ . "/../Model/Config.php");
       
    //Creates the teble "users".
    $query = $_SESSION["connection"]->query("CREATE TABLE users ("
            . "id int(11) NOT NULL AUTO_INCREMENT,"
            . "username varchar(30) NOT NULL,"
            . "password char(128) NOT NULL,"
            . "salt char(128) NOT NULL,"
            . "gold int(6),"
            . "PRIMARY KEY (id))");