<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Doctrine\DBAL\Connection;

class ResumeController
{
    protected $db;

    public function __construct(Connection $db)
    {
        $this->db = $db;
    }

    public function submitResume(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();
        $files = $request->getUploadedFiles();

        $this->db->insert('resumes', [
            'name'             => $data['name'],
            'email'            => $data['email'],
            'phone'            => $data['phone'],
            'desired_position' => $data['desiredPosition'],
            'education'        => $data['education'],
            'comments'         => $data['comments'],
            'resume_file'      => $files['resumeFile']->getClientFilename(),
            'submitted_at'     => date('Y-m-d H:i:s'),
        ]);

        $response->getBody()->write(json_encode(['message' => 'Resume submitted successfully']));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function listResumes(Request $request, Response $response, array $args): Response
    {
        $queryBuilder = $this->db->createQueryBuilder();
        $queryBuilder->select('*')->from('resumes');
        $resumes = $queryBuilder->execute()->fetchAllAssociative();

        $response->getBody()->write(json_encode($resumes));
        return $response->withHeader('Content-Type', 'application/json');
    }
}