<?php
require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;
use DI\Container;
use Doctrine\DBAL\Connection;

$container = new Container();

$container->set(Connection::class, function () {
    return require __DIR__ . '/../src/config.php';
});

AppFactory::setContainer($container);

$app = AppFactory::create();

$app->addRoutingMiddleware();

$app->addErrorMiddleware(true, true, true);

require __DIR__ . '/../src/routes.php';

$app->run();