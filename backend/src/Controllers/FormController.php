<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Psr7\UploadedFile;

class FormController
{
    public function submit(Request $request, Response $response, $args)
    {
        $parsedBody = $request->getParsedBody();
        $uploadedFiles = $request->getUploadedFiles();

        $data = [
            'name' => $parsedBody['name'],
            'email' => $parsedBody['email'],
            'phone' => $parsedBody['phone'],
            'desired_position' => $parsedBody['desired_position'],
            'education' => $parsedBody['education'],
            'notes' => $parsedBody['notes'],
            'file' => $uploadedFiles['file']->getClientFilename(),
            'submission_date' => date('Y-m-d H:i:s')
        ];


        $response->getBody()->write(json_encode(['status' => 'success', 'data' => $data]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}