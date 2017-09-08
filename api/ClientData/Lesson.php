<?php

class Lesson
{
    public $id;
    public $lessonName;

    public function __construct($id, $lessonName)
    {
        $this->id = $id;
        $this->lessonName = $lessonName;
    }
}
