<?php
require_once("../ClientData/Course.php");

function GetAllCourses()
{
    $courses = array(
        new Course(1, "Pockets 1"),
        new Course(2, "Pockets 2"),
        new Course(3, "Backpack 1"),
        new Course(4, "Backpack 2")
    );
    
    return $courses;
    //// Do database stuff
    // $db = new mysqli('localhost', 'user', 'pass', 'demo');

    // if ($db->connect_errno > 0) {
    //     die('Unable to connect to database [' . $db->connect_error . ']');
    // }

    // $sql = "
    //     SELECT *
    //     FROM `users`
    //     WHERE `live` = 1
    // ";

    // if (!$result = $db->query($sql)) {
    //     die('There was an error running the query [' . $db->error . ']');
    // }

    // while ($row = $result->fetch_assoc()) {
    //     echo $row['username'] . '<br />';
    // }
}
