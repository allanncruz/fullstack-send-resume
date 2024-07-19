<?php
use Slim\Routing\RouteCollectorProxy;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

$app->group('/api', function (RouteCollectorProxy $group) {
    $group->post('/submit', \App\Controllers\ResumeController::class . ':submitResume');
});