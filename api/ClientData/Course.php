<?php

class Course
{
    public $id;
    public $courseName;

    public function __construct($id, $courseName)
    {
        $this->id = $id;
        $this->courseName = $courseName;
    }
}
