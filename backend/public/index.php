<?php
require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;

$app = AppFactory::create();

// Adicione o middleware de roteamento
$app->addRoutingMiddleware();

// Defina o roteador
require __DIR__ . '/../src/routes.php';

// Habilite a exibição de erros (apenas para desenvolvimento)
$app->addErrorMiddleware(true, true, true);

$app->run();