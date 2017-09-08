<?php

class Unit
{
    public $id;
    public $unitName;
    public $courseId;

    public function __construct($id, $unitName, $courseId)
    {
        $this->id = $id;
        $this->unitName = $unitName;
        $this->courseId = $courseId;
    }
}
