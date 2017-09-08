<?php
require_once("../ClientData/Unit.php");

function GetAllUnits()
{
    $units = array(
        new Unit(1, "P1U1", 1),
        new Unit(2, "P1U2", 1),
        new Unit(3, "P2U1", 2),
        new Unit(4, "P2U2", 2),
        new Unit(5, "B1U1", 3),
        new Unit(6, "B1U2", 3),
        new Unit(7, "B2U1", 4),
        new Unit(8, "B2U2", 4)
    );
    
    return $units;
}
