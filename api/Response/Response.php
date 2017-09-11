<?php
public class ResponseStatusCode
{
    public static const OK = 200;
    public static const NotFound = 404;
}

public class Response
{
    public $responseCode;
    public $responseStatus;
    public $data;

    public function __construct($responseCode, $data)
    {
        $responseText = "";
        switch ($responseCode) {
            case ResponseStatusCode::OK:
                $responseText = "OK";
                break;
            case ResponseStatusCode::NotFound:
                $responseText = "Not Found";
                break;
        }
    }

    public static function Create($responseCode, $data)
    {
        return new Response($responsecode, $data);
    }
}
