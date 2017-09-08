<?php
require_once("../ClientData/Lesson.php");

function GetAllLessons()
{
    $lessons = array(
        new Lesson(1, "P1U1L1", 1),
        new Lesson(2, "P1U2L1", 2),
        new Lesson(3, "P2U1L1", 3),
        new Lesson(4, "P2U2L1", 4),
        new Lesson(5, "B1U1L1", 5),
        new Lesson(6, "B1U2L1", 6),
        new Lesson(7, "B2U1L1", 7),
        new Lesson(8, "B2U2L1", 8),
        new Lesson(9, "P1U1L2", 1),
        new Lesson(10, "P1U2L2", 2),
        new Lesson(11, "P2U1L2", 3),
        new Lesson(12, "P2U2L2", 4),
        new Lesson(13, "B1U1L2", 5),
        new Lesson(14, "B1U2L2", 6),
        new Lesson(15, "B2U1L2", 7),
        new Lesson(16, "B2U2L2", 8)
    );
    
    return $lessons;
}
