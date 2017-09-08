<?php
require_once("../AppStart/Startup.php");

// Import all required controllers etc
require_once("../Course/GetAllCourses.php");
require_once("../Unit/GetAllUnits.php");
require_once("../Lesson/GetAllLessons.php");

// TODO: All initialisation stuff to occur in BeginContext. For now focus on development time. Need to get something ready for James
//Startup::BeginContext();

// Fetch all tables from database and build it into a downloadable json file
$courses = GetAllCourses();
$units = GetAllUnits();
$lessons = GetAllLessons();

$database = array(
    "courses" => $courses,
    "units" => $units,
    "lessons" => $lessons
);

echo json_encode($database);
